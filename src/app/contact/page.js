import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "Contact Us | RapidCare Ambulance",
  description:
    "Reach RapidCare Ambulance for emergency dispatch, scheduled patient transfer, or general enquiries across Delhi NCR.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
         {/* Row 2 */}
          <div className="mb-12">
            <ContactForm />
          </div>
          {/* Row 1 */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ContactInfo />
            <ContactMap />
          </div>

         

          {/* Row 3 */}
          <FAQ />
        </div>
      </section>
    </>
  );
}
