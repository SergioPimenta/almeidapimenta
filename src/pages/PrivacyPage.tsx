import { CtaBand } from '../components/home/CtaBand';
import { PrivacyContent } from '../components/legal/PrivacyContent';
import { PublicLayout } from '../components/layout/PublicLayout';

const PrivacyPage = () => (
  <PublicLayout>
    <main>
      <PrivacyContent />
      <CtaBand />
    </main>
  </PublicLayout>
);

export default PrivacyPage;
