const approaches = [
  {
    title: 'Atuação preventiva',
    desc: 'Antecipamos riscos jurídicos antes que se tornem processos e custos. Consultoria, auditorias e adequação de rotinas para dar segurança às decisões do dia a dia.',
    icon: <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4zm-1.2 13.4l5-5-1.4-1.4-3.6 3.6-1.6-1.6L7.8 11z" />,
  },
  {
    title: 'Atuação contenciosa',
    desc: 'Defesa técnica e estratégica em litígios judiciais e administrativos, acompanhando cada etapa do processo com comunicação clara e foco no melhor resultado.',
    icon: <path d="M3 21h18M6 21V10m12 11V10M4 10l8-6 8 6M9 21v-5h6v5" />,
  },
];

export const AreasApproach = () => (
  <section className="bg-ap-surface page-px py-[100px]">
    <div className="mx-auto mb-14 max-w-[640px] text-center">
      <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase">
        Como atuamos
      </span>
      <h2 className="font-heading mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] font-bold text-ap-navy">
        Prevenir e defender
      </h2>
      <p className="mt-4 text-[15px] leading-[1.75] text-ap-ink-soft">
        Combinamos visão preventiva e defesa técnica para proteger o negócio em todos os cenários.
      </p>
    </div>

    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      {approaches.map((item) => (
        <article
          key={item.title}
          className="relative overflow-hidden rounded-2xl p-9 text-white shadow-[0_18px_44px_rgba(20,39,63,0.16)]"
          style={{ background: 'linear-gradient(155deg, #274a78, #14273f)' }}
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(255_255_255/0.12)]">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#dfe7f1"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
          </div>
          <h3 className="font-heading mb-3 text-[1.3rem] font-bold text-white">{item.title}</h3>
          <p className="text-[14.5px] leading-[1.75] text-[rgb(223_231_241/0.82)]">{item.desc}</p>
        </article>
      ))}
    </div>
  </section>
);
