import { About } from '../components/home/About';
import { FinalCta } from '../components/home/FinalCta';
import { Hero } from '../components/home/Hero';
import { PracticeAreas } from '../components/home/PracticeAreas';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';
import { WhyUs } from '../components/home/WhyUs';
import { PublicLayout } from '../components/layout/PublicLayout';

const Home = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default Home;
