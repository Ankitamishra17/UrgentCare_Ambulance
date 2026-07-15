
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";

export const metadata = {
  title: "Our Services | RapidCare Ambulance",
  description:
    "Emergency response, ICU on wheels, patient transfer, event standby, home care pickup, and mortuary transport — 24/7 across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <>
    
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
   
    
    </>
  );
}