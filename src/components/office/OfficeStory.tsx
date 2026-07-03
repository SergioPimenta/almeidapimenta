const milestones = [
  {
    year: 'Origem',
    title: 'Fundação do escritório',
    desc: 'A Almeida Pimenta nasce com o propósito de oferecer assessoria jurídica empresarial de alto nível, próxima e estratégica.',
  },
  {
    year: 'Consolidação',
    title: 'Foco empresarial',
    desc: 'Especialização nas esferas Trabalhista, Tributária e Cível, com atuação consultiva e contenciosa para empresas.',
  },
  {
    year: 'Crescimento',
    title: 'Confiança de clientes',
    desc: 'Mais de 500 casos conduzidos e uma carteira crescente de empresas assessoradas de forma contínua.',
  },
  {
    year: 'Hoje',
    title: 'Advocacia preventiva',
    desc: 'Equipe consolidada e metodologia madura, com ênfase em antecipar riscos antes que se tornem litígios.',
  },
];

const features = [
  'Atuação consultiva e contenciosa para empresas',
  'Estratégias sob medida para cada cliente',
  'Comunicação clara e transparente em cada etapa',
];

export const OfficeStory = () => (
  <section id="historia" className="bg-ap-bg page-px py-[100px]">
    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
      <div>
        <span className="font-sans inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-ap-blue uppercase before:block before:h-px before:w-7 before:bg-ap-blue before:content-['']">
          Nossa história
        </span>
        <h2 className="font-heading mt-4 text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] font-bold text-ap-navy">
          Um compromisso constante com a segurança jurídica
        </h2>
        <p className="mt-5 text-[15px] leading-[1.8] text-ap-ink-soft">
          Nossa equipe de advogados altamente qualificados tem experiência em diversas áreas do
          direito. Estamos constantemente atualizando nossos conhecimentos jurídicos para garantir a
          melhor representação possível aos nossos clientes.
        </p>
        <p className="mt-4 text-[15px] leading-[1.8] text-ap-ink-soft">
          Do diagnóstico ao acompanhamento contínuo, mantemos o mesmo compromisso: proteger o negócio
          do cliente com estratégia, técnica e resultado.
        </p>
        <ul className="mt-8 flex flex-col gap-3.5">
          {features.map((text) => (
            <li key={text} className="flex items-start gap-3 font-medium text-ap-ink">
              <svg viewBox="0 0 24 24" width="22" height="22" className="mt-0.5 shrink-0 fill-ap-blue">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
              </svg>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col border-l border-ap-line pl-10">
        {milestones.map((item, index) => (
          <article
            key={item.title}
            className={`relative pb-10 ${index < milestones.length - 1 ? 'mb-10 border-b border-ap-line' : ''}`}
          >
            <span
              className="absolute top-1.5 -left-[46px] flex h-3 w-3 rounded-full border-2 border-ap-bg bg-ap-blue"
              aria-hidden
            />
            <span className="font-sans text-[12px] font-bold tracking-[0.16em] text-ap-blue uppercase">
              {item.year}
            </span>
            <h3 className="font-heading mt-2 mb-2 text-lg font-bold text-ap-navy">{item.title}</h3>
            <p className="text-sm leading-relaxed text-ap-ink-soft">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
