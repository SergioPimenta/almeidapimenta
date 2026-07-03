import type { ReactNode } from 'react';

export type PracticeArea = {
  id: string;
  title: string;
  desc: string;
  items: string[];
  icon: ReactNode;
};

export const practiceAreas: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Trabalhista',
    desc: 'Assistência a empresas na esfera trabalhista, tanto contenciosa quanto consultiva e preventiva, orientando sobre a correta aplicação da legislação individual e coletiva.',
    items: [
      'Defesa em reclamatórias trabalhistas',
      'Consultoria preventiva e auditorias',
      'Negociações e acordos coletivos',
      'Adequação de rotinas e contratos',
    ],
    icon: <path d="M10 4h4l1 3h5v13H4V7h5l1-3zm2 6a4 4 0 100 8 4 4 0 000-8z" />,
  },
  {
    id: 'tributario',
    title: 'Tributário',
    desc: 'Atuação contra interpretações incorretas da Administração Pública, buscando a redução ou eliminação de tributos indevidos e obrigações acessórias ilegais para a regularidade fiscal.',
    items: [
      'Planejamento tributário empresarial',
      'Recuperação de tributos pagos indevidamente',
      'Defesas administrativas e judiciais',
      'Revisão de obrigações acessórias',
    ],
    icon: (
      <path d="M12 1v3m0 16v3M4.2 4.2l2.1 2.1m11.4 11.4l2.1 2.1M1 12h3m16 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 7a5 5 0 100 10 5 5 0 000-10z" />
    ),
  },
  {
    id: 'civel',
    title: 'Cível e Relações de Consumo',
    desc: 'Especialização no atendimento a pessoas jurídicas na área cível e de relações de consumo, assessorando empresas em litígios judiciais e demandas extrajudiciais.',
    items: [
      'Contencioso cível empresarial',
      'Contratos e responsabilidade civil',
      'Demandas de relações de consumo',
      'Cobranças e recuperação de crédito',
    ],
    icon: (
      <>
        <path d="M9 11l-4 4 2 2 4-4m4-4l4-4-2-2-4 4M7 7l10 10" />
        <path d="M8 3l3 3-2 2-3-3zm8 12l3 3-2 2-3-3z" />
      </>
    ),
  },
  {
    id: 'empresarial',
    title: 'Empresarial',
    desc: 'Assessoria jurídica contínua para a rotina do negócio, apoiando decisões estratégicas com segurança jurídica e foco na prevenção de riscos.',
    items: [
      'Consultoria societária e contratual',
      'Governança e compliance',
      'Prevenção e gestão de riscos',
      'Acompanhamento jurídico recorrente',
    ],
    icon: (
      <>
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
];
