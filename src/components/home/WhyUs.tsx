const items = [
  {
    title: 'Experiência empresarial',
    desc: 'Advogados com atuação consolidada no ambiente corporativo.',
    icon: <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z" />,
  },
  {
    title: 'Foco preventivo',
    desc: 'Antecipamos riscos antes que virem processos e custos.',
    icon: <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5z" />,
  },
  {
    title: 'Agilidade',
    desc: 'Respostas rápidas e acompanhamento próximo de cada caso.',
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6l4 2-.8 1.7L11 14V7z" />,
  },
  {
    title: 'Transparência',
    desc: 'Honorários e etapas explicados com clareza, sem surpresas.',
    icon: (
      <path d="M12 2C7 2 3 6 3 11c0 4 2.5 7.4 6 8.6V22h6v-2.4c3.5-1.2 6-4.6 6-8.6 0-5-4-9-9-9zm-1 13l-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9z" />
    ),
  },
];

export const WhyUs = () => (
  <section className="bg-ap-bg page-px py-[100px]">
    <div className="mx-auto mb-12 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Por que a Almeida Pimenta
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Segurança jurídica que gera resultado
      </h2>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ap-surface shadow-[0_2px_8px_rgba(20,39,63,0.08)]">
            <svg viewBox="0 0 24 24" width="26" height="26" className="fill-ap-navy">
              {item.icon}
            </svg>
          </div>
          <h3 className="font-heading mb-2 text-[1.05rem] font-bold text-ap-navy">{item.title}</h3>
          <p className="text-[13.5px] leading-[1.65] text-ap-ink-soft">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
