"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Header from "@/components/layout/Header";

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service") || "Service Request";
  const formattedService = serviceQuery
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [formData, setFormData] = useState({
    applicantName: "",
    sponsorName: "",
    sponsorEmail: "",
    dependentRelation: "",
    sponsorMobile: "",
    sponsorMobileCode: "+971",
    whatsappNumber: "",
    whatsappCode: "+971",
    iban: "",
    insideOutside: "Inside",
    poBox: "",
    address: "",
    remarks: "",
    paymentMethod: "",
    files: [] as File[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...droppedFiles] }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...selectedFiles] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a FormData object for Web3Forms submission
      // Note: File uploads require multipart/form-data. Web3Forms supports this natively.
      const submissionData = new FormData();
      
      // REQUIRED: Web3Forms Access Key
      // Replace this dummy key with your actual key from https://web3forms.com/
      submissionData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
      
      // Form Subjects and routing
      submissionData.append("subject", `New Application for ${formattedService} - ${formData.applicantName}`);
      submissionData.append("from_name", formData.sponsorName || formData.applicantName);
      
      // Append all form fields
      submissionData.append("Service Requested", formattedService);
      submissionData.append("Applicant Name", formData.applicantName);
      submissionData.append("Sponsor Name", formData.sponsorName);
      submissionData.append("Sponsor Email", formData.sponsorEmail);
      if (formData.dependentRelation) submissionData.append("Dependent Relation", formData.dependentRelation);
      submissionData.append("Sponsor Mobile", `${formData.sponsorMobileCode} ${formData.sponsorMobile}`);
      submissionData.append("WhatsApp", `${formData.whatsappCode} ${formData.whatsappNumber}`);
      submissionData.append("IBAN", formData.iban);
      submissionData.append("Inside/Outside", formData.insideOutside);
      submissionData.append("P.O. Box", formData.poBox);
      if (formData.address) submissionData.append("Address", formData.address);
      if (formData.remarks) submissionData.append("Remarks", formData.remarks);
      submissionData.append("Payment Method", formData.paymentMethod);

      // Append files if any
      if (formData.files && formData.files.length > 0) {
        formData.files.forEach((file) => {
          // Web3Forms accepts files named 'attachment' or custom names
          submissionData.append("attachment", file);
        });
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Redirect to dummy payment link
        window.location.href = "https://sandbox.checkout.com/pay/dummy-payment-gateway"; // Dummy link
      } else {
        alert("There was an error submitting the form. Please check your access key or try again.");
        console.error(result);
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white mt-24 mb-16 shadow-sm border border-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Applying for: <span className="font-normal text-gray-500">{formattedService}</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        {/* Full Name of Applicant */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name of Applicant <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Full Name of Sponsor */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name of Sponsor <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sponsorName"
            value={formData.sponsorName}
            onChange={handleInputChange}
            placeholder="Enter Full Name of Sponsor"
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Sponsor Email ID */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Sponsor Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="sponsorEmail"
            value={formData.sponsorEmail}
            onChange={handleInputChange}
            placeholder="Enter Your valid Email"
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Dependent Relation */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Dependent Relation
          </label>
          <select
            name="dependentRelation"
            value={formData.dependentRelation}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          >
            <option value="">Select Relation</option>
            <option value="Wife">Wife</option>
            <option value="Husband">Husband</option>
            <option value="Son">Son</option>
            <option value="Daughter">Daughter</option>
            <option value="Parent">Parent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Sponsor Mobile No. */}
        <div>
          <label className="flex justify-between text-gray-700 font-medium mb-1">
            <span>Sponsor Mobile No. <span className="text-red-500">*</span></span>
            <span className="text-xs text-gray-400 font-normal">Sponsor's working phone without any zeros</span>
          </label>
          <div className="flex">
            <select
              name="sponsorMobileCode"
              value={formData.sponsorMobileCode}
              onChange={handleInputChange}
              className="border border-gray-300 border-r-0 p-2.5 rounded-l-sm bg-gray-50 focus:outline-none"
            >
              <option value="+971">🇦🇪 +971</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+1">🇺🇸 +1</option>
              {/* Add more as needed */}
            </select>
            <input
              type="tel"
              name="sponsorMobile"
              value={formData.sponsorMobile}
              onChange={handleInputChange}
              required
              className="flex-1 border border-gray-300 p-2.5 rounded-r-sm focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        {/* WhatsApp No. */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            WhatsApp No. <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <select
              name="whatsappCode"
              value={formData.whatsappCode}
              onChange={handleInputChange}
              className="border border-gray-300 border-r-0 p-2.5 rounded-l-sm bg-gray-50 focus:outline-none"
            >
              <option value="+971">🇦🇪 +971</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              required
              className="flex-1 border border-gray-300 p-2.5 rounded-r-sm focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>

        {/* Account IBAN */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Account IBAN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="iban"
            value={formData.iban}
            onChange={handleInputChange}
            placeholder="Enter IBAN Number"
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Inside/Outside */}
        <div>
          <label className="flex justify-between text-gray-700 font-medium mb-1">
            <span>Inside/Outside <span className="text-red-500">*</span></span>
            <span className="text-xs text-gray-400 font-normal">Applicable only for entry permit applications</span>
          </label>
          <select
            name="insideOutside"
            value={formData.insideOutside}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          >
            <option value="Inside">Inside</option>
            <option value="Outside">Outside</option>
          </select>
        </div>

        {/* P.O. Box */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            P.O. Box <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="poBox"
            value={formData.poBox}
            onChange={handleInputChange}
            placeholder="P.O. Box Number"
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address Information"
            rows={4}
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500 resize-none"
          ></textarea>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Remarks
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            placeholder="Any specific Instructions"
            rows={4}
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500 resize-none"
          ></textarea>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Payment Method <span className="text-red-500">*</span>
          </label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 p-2.5 rounded-sm focus:outline-none focus:border-gray-500"
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card / Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cash">Cash (at office)</option>
          </select>
        </div>

        {/* Documents Required */}
        <div className="pt-2">
          <label className="block text-gray-700 font-medium mb-2">
            Documents Required
          </label>
          <p className="text-gray-500 text-xs leading-relaxed">
            (1) The original ID of the sponsor copy of the sponsor's passport (2) copy of the sponsor's residence visa (3) The sponsor's work contract or salary (4) Certificate-copy of the birth certificate, for the children (5) Copy of the marriage contract for wife/husband (6) A copy of the applicant's passport (7) Personal photo of applicant with a white background
          </p>
        </div>

        {/* File Upload Area */}
        <div>
          <label className="flex justify-between text-gray-700 font-medium mb-2">
            <span>Attach your files <span className="text-red-500">*</span></span>
            <span className="text-xs text-gray-400 font-normal">Kindly upload all requirement documents. if you missed any documents, your application will be rejected.</span>
          </label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-md p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <span className="text-gray-500">Drop files here to upload</span>
            <input
              type="file"
              id="file-upload"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>
          {formData.files.length > 0 && (
            <ul className="mt-4 space-y-2">
              {formData.files.map((f, i) => (
                <li key={i} className="text-sm text-gray-600 flex justify-between">
                  <span>{f.name}</span>
                  <span className="text-gray-400">{(f.size / 1024).toFixed(1)} KB</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E53935] hover:bg-red-700 text-white font-medium py-3 rounded-sm transition-colors flex items-center justify-center"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading form...</div>}>
        <ApplyFormContent />
      </Suspense>
    </main>
  );
}
