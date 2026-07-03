import { FinalCta } from '../components/home/FinalCta';
import { PrivacyContent } from '../components/legal/PrivacyContent';
import { PublicLayout } from '../components/layout/PublicLayout';

const PrivacyHero = () => (
  <section className="relative overflow-hidden bg-ap-navy-deep text-white page-px pt-[150px] pb-20">
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{ background: 'linear-gradient(100deg, #14273f 0%, #1c3a5e 55%, #274a78 100%)' }}
    />
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue-soft uppercase">
        Legal
      </span>
      <h1 className="font-heading mt-4 text-[clamp(2.1rem,4.6vw,3.2rem)] leading-[1.1] font-bold">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-[rgb(223_231_241/0.7)]">Última atualização: julho de 2026</p>
    </div>
  </section>
);

const PrivacyPage = () => (
  <PublicLayout>
    <main className="bg-ap-bg font-sans text-ap-ink">
      <PrivacyHero />
      <PrivacyContent />
      <FinalCta />
    </main>
  </PublicLayout>
);

export default PrivacyPage;
