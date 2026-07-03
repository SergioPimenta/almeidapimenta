const stats = [
  { num: '+15', label: 'Anos de experiência' },
  { num: '+500', label: 'Casos conduzidos' },
  { num: '3', label: 'Áreas de especialização' },
  { num: '98%', label: 'Clientes satisfeitos' },
];

export const Stats = () => (
  <section aria-label="Números do escritório" className="bg-ap-navy text-white page-px py-10">
    <div className="grid grid-cols-2 gap-y-8 text-center md:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={i < stats.length - 1 ? 'md:border-r md:border-[rgb(255_255_255/0.12)]' : ''}
        >
          <div className="font-heading text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold text-ap-blue-soft">
            {stat.num}
          </div>
          <div className="mt-1 text-[13px] tracking-wide text-[rgb(223_231_241/0.75)]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);
