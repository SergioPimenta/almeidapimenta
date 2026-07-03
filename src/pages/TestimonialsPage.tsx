import { FinalCta } from '../components/home/FinalCta';
import { Stats } from '../components/home/Stats';
import { TestimonialsGrid } from '../components/testimonials/TestimonialsGrid';
import { TestimonialsHero } from '../components/testimonials/TestimonialsHero';
import { PublicLayout } from '../components/layout/PublicLayout';

const TestimonialsPage = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <TestimonialsHero />
      <Stats />
      <TestimonialsGrid />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default TestimonialsPage;
