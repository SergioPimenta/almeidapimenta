import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Introdução',
    content: (
      <p>
        A Almeida Pimenta Advogados valoriza a privacidade e a proteção dos dados pessoais de
        visitantes, clientes e parceiros. Esta Política de Privacidade descreve como coletamos,
        utilizamos, armazenamos e protegemos suas informações ao utilizar nosso site e nossos
        serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
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
            <strong>Dados de identificação:</strong> nome, e-mail, telefone e empresa informados no
            formulário de contato.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas,
            tempo de permanência e origem do acesso.
          </li>
          <li>
            <strong>Dados de comunicação:</strong> mensagens enviadas por formulário, e-mail ou
            WhatsApp.
          </li>
          <li>
            <strong>Dados relativos ao atendimento:</strong> informações necessárias à prestação de
            serviços jurídicos, tratadas sob sigilo profissional.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Finalidade do tratamento',
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Responder solicitações de contato, dúvidas e agendamento de consultas.</li>
        <li>Prestar os serviços jurídicos contratados e acompanhar os casos em andamento.</li>
        <li>Melhorar a experiência de navegação e o desempenho do site.</li>
        <li>Enviar comunicações relevantes sobre nossos serviços, quando autorizado.</li>
        <li>Cumprir obrigações legais, regulatórias e deveres profissionais.</li>
      </ul>
    ),
  },
  {
    title: '4. Base legal',
    content: (
      <p>
        O tratamento de dados pessoais fundamenta-se nas hipóteses previstas na LGPD, incluindo o
        consentimento do titular, a execução de contrato, o exercício regular de direitos, o
        cumprimento de obrigação legal ou regulatória e o legítimo interesse para melhoria dos
        serviços.
      </p>
    ),
  },
  {
    title: '5. Sigilo profissional',
    content: (
      <p>
        As informações compartilhadas no âmbito da relação advogado-cliente são protegidas pelo
        sigilo profissional, dever legal e ético da advocacia. Tais dados são tratados com estrita
        confidencialidade e utilizados exclusivamente para a defesa dos interesses do cliente.
      </p>
    ),
  },
  {
    title: '6. Compartilhamento de dados',
    content: (
      <p>
        Não vendemos dados pessoais. O compartilhamento pode ocorrer apenas com prestadores de
        serviço essenciais à operação (hospedagem, e-mail, ferramentas de análise), sempre mediante
        contratos que garantam a proteção das informações, ou quando exigido por lei ou ordem
        judicial.
      </p>
    ),
  },
  {
    title: '7. Armazenamento e segurança',
    content: (
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não
        autorizado, perda, alteração ou divulgação indevida. Os dados são mantidos pelo tempo
        necessário para cumprir as finalidades descritas nesta política ou conforme exigências
        legais.
      </p>
    ),
  },
  {
    title: '8. Seus direitos',
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
    title: '9. Cookies',
    content: (
      <p>
        Utilizamos cookies e tecnologias semelhantes para melhorar a navegação, analisar o uso do
        site e personalizar conteúdo. Você pode gerenciar cookies nas configurações do seu navegador,
        ciente de que a desativação pode afetar algumas funcionalidades.
      </p>
    ),
  },
  {
    title: '10. Alterações e contato',
    content: (
      <p>
        Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou
        na legislação aplicável. Para exercer seus direitos ou esclarecer dúvidas, entre em contato
        pelo e-mail{' '}
        <a
          href="mailto:contato@almeidapimenta.com.br"
          className="text-ap-blue no-underline hover:text-ap-navy"
        >
          contato@almeidapimenta.com.br
        </a>{' '}
        ou pela página de{' '}
        <Link to="/contato" className="text-ap-blue no-underline hover:text-ap-navy">
          contato
        </Link>
        . O escritório está sediado em Curitiba, PR — Brasil.
      </p>
    ),
  },
];

export const PrivacyContent = () => (
  <section className="bg-ap-bg page-px py-[90px]">
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-ap-line bg-ap-surface px-8 py-7 shadow-[0_2px_8px_rgba(20,39,63,0.04)]"
          >
            <h2 className="font-heading mb-4 text-lg font-bold text-ap-navy">{section.title}</h2>
            <div className="text-[14.5px] leading-[1.85] text-ap-ink-soft [&_p+p]:mt-4 [&_strong]:font-semibold [&_strong]:text-ap-ink">
              {section.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
