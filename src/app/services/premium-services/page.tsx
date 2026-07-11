import PremiumServicesSection from "@/components/home/PremiumServicesSection";

export const metadata = {
  title: "Premium Services | EDCS",
  description: "Explore our premium government and visa solutions for individuals and businesses.",
};

export default function PremiumServicesPage() {
  return (
    <div className="pt-24 md:pt-32 min-h-screen bg-[#F8F9FA]">
      <PremiumServicesSection />
    </div>
  );
}
