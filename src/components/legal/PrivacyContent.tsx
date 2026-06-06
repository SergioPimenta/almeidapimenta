import { Link } from 'react-router-dom';
import { pageHeroTitleClass, SectionLabel } from '../home/ui';
import { cn } from '../../lib/cn';

const sections = [
  {
    title: '1. Introdução',
    content: (
      <p>
        A VESK valoriza a privacidade e a proteção dos dados pessoais de visitantes, clientes e parceiros. Esta
        Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações ao
        utilizar nosso site e nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
        13.709/2018).
      </p>
    ),
  },
  {
    title: '2. Dados que coletamos',
    content: (
      <>
        <p>Podemos coletar os seguintes tipos de dados, conforme sua interação conosco:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-vesk-surface">Dados de identificação:</strong> nome, e-mail, telefone e empresa
            informados no formulário de contato.
          </li>
          <li>
            <strong className="text-vesk-surface">Dados de navegação:</strong> endereço IP, tipo de navegador,
            páginas visitadas, tempo de permanência e origem do acesso.
          </li>
          <li>
            <strong className="text-vesk-surface">Dados de comunicação:</strong> mensagens enviadas por formulário,
            e-mail ou WhatsApp.
          </li>
          <li>
            <strong className="text-vesk-surface">Dados de contrato:</strong> informações necessárias para prestação
            de serviços e suporte técnico, quando aplicável.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Finalidade do tratamento',
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Responder solicitações de contato, orçamentos e suporte.</li>
        <li>Prestar serviços contratados e acompanhar projetos em andamento.</li>
        <li>Melhorar a experiência de navegação e o desempenho do site.</li>
        <li>Enviar comunicações relevantes sobre nossos serviços, quando autorizado.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
    ),
  },
  {
    title: '4. Base legal',
    content: (
      <p>
        O tratamento de dados pessoais pela VESK fundamenta-se nas hipóteses previstas na LGPD, incluindo o
        consentimento do titular, a execução de contrato, o legítimo interesse para melhoria dos serviços e o
        cumprimento de obrigação legal ou regulatória.
      </p>
    ),
  },
  {
    title: '5. Compartilhamento de dados',
    content: (
      <p>
        Não vendemos dados pessoais. O compartilhamento pode ocorrer apenas com prestadores de serviço essenciais à
        operação (hospedagem, e-mail, ferramentas de análise), sempre mediante contratos que garantam a proteção das
        informações, ou quando exigido por lei ou ordem judicial.
      </p>
    ),
  },
  {
    title: '6. Armazenamento e segurança',
    content: (
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda,
        alteração ou divulgação indevida. Os dados são mantidos pelo tempo necessário para cumprir as finalidades
        descritas nesta política ou conforme exigências legais.
      </p>
    ),
  },
  {
    title: '7. Seus direitos',
    content: (
      <>
        <p>De acordo com a LGPD, você pode solicitar:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Confirmação da existência de tratamento e acesso aos seus dados.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Portabilidade dos dados, quando aplicável.</li>
          <li>Revogação do consentimento, quando o tratamento se basear nessa hipótese.</li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Cookies',
    content: (
      <p>
        Utilizamos cookies e tecnologias semelhantes para melhorar a navegação, analisar o uso do site e personalizar
        conteúdo. Você pode gerenciar cookies nas configurações do seu navegador, ciente de que a desativação pode
        afetar algumas funcionalidades.
      </p>
    ),
  },
  {
    title: '9. Alterações nesta política',
    content: (
      <p>
        Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação
        aplicável. A data da última atualização será indicada no topo desta página.
      </p>
    ),
  },
  {
    title: '10. Contato',
    content: (
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail{' '}
        <a href="mailto:contato@vesk.com.br" className="text-vesk-orange no-underline hover:text-vesk-orange-light">
          contato@vesk.com.br
        </a>{' '}
        ou pela página de{' '}
        <Link to="/contato" className="text-vesk-orange no-underline hover:text-vesk-orange-light">
          contato
        </Link>
        . A VESK está sediada em Curitiba, PR — Brasil.
      </p>
    ),
  },
];

export const PrivacyContent = () => (
  <section className="relative overflow-hidden bg-vesk-black page-px pb-[120px]">
    <div
      className="pointer-events-none absolute -top-[200px] -left-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,88,26,0.08)_0%,transparent_70%)]"
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-3xl pt-[140px]">
      <SectionLabel>Legal</SectionLabel>
      <h1 className={cn('mb-4', pageHeroTitleClass)}>Política de Privacidade</h1>
      <p className="mb-12 text-sm text-vesk-muted">Última atualização: maio de 2025</p>

      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-xl border border-vesk-border bg-vesk-dark-2 px-8 py-7"
          >
            <h2 className="font-display mb-4 text-lg font-semibold text-vesk-orange">{section.title}</h2>
            <div className="text-sm leading-[1.85] text-vesk-muted [&_p+p]:mt-4 [&_strong]:font-medium">
              {section.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
