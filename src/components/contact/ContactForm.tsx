import { useState } from 'react';
import { api } from '../../services/api';
import { apInputClass } from './contactData';

type ContactFormProps = {
  id?: string;
  className?: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const labelSpan = 'font-sans text-[11px] font-semibold tracking-[0.12em] text-ap-ink-soft uppercase';

export const ContactForm = ({ id, className }: ContactFormProps) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setError('');
    try {
      await api.post('/contact', data);
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Não foi possível enviar a mensagem.');
    }
  };

  return (
    <form id={id} className={className} onSubmit={handleSubmit} aria-label="Formulário de contato">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelSpan}>Nome completo *</span>
          <input type="text" name="name" required placeholder="Seu nome" className={apInputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelSpan}>Empresa</span>
          <input type="text" name="company" placeholder="Sua empresa" className={apInputClass} />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelSpan}>E-mail *</span>
          <input type="email" name="email" required placeholder="seu@email.com.br" className={apInputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelSpan}>Telefone *</span>
          <input type="tel" name="phone" required placeholder="(41) 99203-4554" className={apInputClass} />
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-2">
        <span className={labelSpan}>Área de interesse</span>
        <select name="subject" className={apInputClass} defaultValue="">
          <option value="" disabled>
            Selecione uma área
          </option>
          <option value="trabalhista">Trabalhista</option>
          <option value="tributario">Tributário</option>
          <option value="civel">Cível e Relações de Consumo</option>
          <option value="empresarial">Empresarial</option>
          <option value="outro">Outro assunto</option>
        </select>
      </label>
      <label className="mt-4 flex flex-col gap-2">
        <span className={labelSpan}>Mensagem *</span>
        <textarea
          name="message"
          required
          placeholder="Descreva brevemente a sua situação ou dúvida jurídica..."
          className={`${apInputClass} min-h-[140px] resize-y`}
        />
      </label>

      {status === 'success' && (
        <p
          role="status"
          className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
        >
          Mensagem enviada com sucesso! Retornaremos em breve.
        </p>
      )}
      {status === 'error' && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error || 'Não foi possível enviar a mensagem. Tente novamente.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="font-sans mt-6 inline-flex cursor-pointer items-center gap-2.5 self-start rounded-lg border-none bg-ap-navy px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ap-navy-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
        {status !== 'sending' && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5z" />
          </svg>
        )}
      </button>
    </form>
  );
};
