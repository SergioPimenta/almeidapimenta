import { AreasApproach } from '../components/areas/AreasApproach';
import { AreasHero } from '../components/areas/AreasHero';
import { AreasList } from '../components/areas/AreasList';
import { FinalCta } from '../components/home/FinalCta';
import { PublicLayout } from '../components/layout/PublicLayout';

const AreasPage = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <AreasHero />
      <AreasList />
      <AreasApproach />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default AreasPage;
