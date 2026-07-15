
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import MeetOurTeam from "@/components/about/OurTeam";
import CTASection from "@/components/about/CTASection"
export const metadata = {
  title: "About Us | UrgentCare Ambulance",
  description:
    "Emergency response, ICU on wheels, patient transfer, event standby, home care pickup, and mortuary transport — 24/7 across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <>
    
     <AboutHero/>
     <OurStory/>
     <MissionVision/>
    <MeetOurTeam/>
    <CTASection/>
    </>
  );
}