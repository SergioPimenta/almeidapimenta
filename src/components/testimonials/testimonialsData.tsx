export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  area: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: 'MR',
    name: 'Marcos R.',
    role: 'Diretor — Indústria (exemplo)',
    area: 'Trabalhista',
    quote:
      'Resolveram uma questão trabalhista complexa da nossa empresa com estratégia e clareza. Atendimento próximo do início ao fim.',
  },
  {
    initials: 'AC',
    name: 'Ana C.',
    role: 'Sócia — Comércio (exemplo)',
    area: 'Tributário',
    quote:
      'A revisão tributária identificou tributos que pagávamos indevidamente. Profissionalismo e transparência do começo ao fim.',
  },
  {
    initials: 'JF',
    name: 'João F.',
    role: 'CEO — Tecnologia (exemplo)',
    area: 'Empresarial',
    quote:
      'A consultoria preventiva evitou riscos que nem sabíamos que existiam. Passamos a decidir com muito mais segurança jurídica.',
  },
  {
    initials: 'PS',
    name: 'Patrícia S.',
    role: 'Gerente Jurídica — Varejo (exemplo)',
    area: 'Cível',
    quote:
      'Conduziram nosso contencioso cível com técnica e comunicação impecável. Sempre soubemos exatamente em que etapa estávamos.',
  },
  {
    initials: 'RL',
    name: 'Ricardo L.',
    role: 'Empresário (exemplo)',
    area: 'Tributário',
    quote:
      'Recuperamos valores relevantes com o planejamento tributário. Uma equipe que realmente entende a rotina de uma empresa.',
  },
  {
    initials: 'CM',
    name: 'Carla M.',
    role: 'Diretora de RH — Serviços (exemplo)',
    area: 'Trabalhista',
    quote:
      'A adequação das nossas rotinas trabalhistas trouxe tranquilidade. Atendimento humano, ágil e sempre disponível.',
  },
];
