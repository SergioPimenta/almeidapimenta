import { ContactFaq } from '../components/contact/ContactFaq';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactMain } from '../components/contact/ContactMain';
import { FinalCta } from '../components/home/FinalCta';
import { PublicLayout } from '../components/layout/PublicLayout';

const ContactPage = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <ContactHero />
      <ContactMain />
      <ContactFaq />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default ContactPage;
