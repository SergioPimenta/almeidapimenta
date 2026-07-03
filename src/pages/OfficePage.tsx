import { FinalCta } from '../components/home/FinalCta';
import { Stats } from '../components/home/Stats';
import { OfficeHero } from '../components/office/OfficeHero';
import { OfficeStory } from '../components/office/OfficeStory';
import { OfficeValues } from '../components/office/OfficeValues';
import { PublicLayout } from '../components/layout/PublicLayout';

const OfficePage = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <OfficeHero />
      <Stats />
      <OfficeStory />
      <OfficeValues />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default OfficePage;
