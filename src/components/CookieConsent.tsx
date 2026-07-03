import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'ap-cookie-consent';

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }));
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies e termos de uso"
      className="fixed inset-x-0 bottom-0 z-[200] flex justify-center p-4"
    >
      <div className="animate-fade-up flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-ap-line bg-ap-surface p-6 shadow-[0_18px_50px_rgba(20,39,63,0.22)] sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-start gap-4">
          <span
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white sm:flex"
            style={{ background: 'linear-gradient(150deg, #3f6592, #1c3a5e)' }}
            aria-hidden
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5z" />
              <circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none" />
              <circle cx="14" cy="15" r="1" fill="currentColor" stroke="none" />
              <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <p className="text-[13.5px] leading-[1.65] text-ap-ink-soft">
            Utilizamos cookies para melhorar a sua experiência de navegação. Ao continuar, você
            concorda com os nossos termos de uso e com a nossa{' '}
            <Link to="/politica-privacidade" className="font-medium text-ap-blue no-underline hover:text-ap-navy">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="font-sans cursor-pointer rounded-lg border border-ap-line bg-transparent px-5 py-2.5 text-[13px] font-medium text-ap-ink-soft transition-colors duration-200 hover:border-ap-navy hover:text-ap-navy"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="font-sans cursor-pointer rounded-lg border-none bg-ap-navy px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-ap-navy-700"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};
