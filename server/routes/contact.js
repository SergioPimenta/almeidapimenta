import express from 'express';
import { sendMail } from '../utils/mailer.js';

const router = express.Router();

// Destino das mensagens do formulário de contato.
const CONTACT_TO = process.env.CONTACT_TO || 'contato@sergiopimenta.com.br';

const AREA_LABELS = {
  trabalhista: 'Trabalhista',
  tributario: 'Tributário',
  civel: 'Cível e Relações de Consumo',
  empresarial: 'Empresarial',
  outro: 'Outro assunto',
};

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

router.post('/', async (req, res) => {
  const { name, company, email, phone, subject, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Preencha nome, e-mail, telefone e mensagem.' });
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return res.status(400).json({ message: 'Informe um e-mail válido.' });
  }

  const area = AREA_LABELS[subject] || 'Não informada';

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2b3d; line-height: 1.6;">
      <h2 style="color: #1c3a5e; margin: 0 0 16px;">Nova mensagem pelo site</h2>
      <table style="border-collapse: collapse;">
        <tr><td style="padding: 4px 12px 4px 0;"><strong>Nome:</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0;"><strong>Empresa:</strong></td><td>${escapeHtml(company) || '—'}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0;"><strong>E-mail:</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0;"><strong>Telefone:</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0;"><strong>Área:</strong></td><td>${escapeHtml(area)}</td></tr>
      </table>
      <p style="margin: 16px 0 4px;"><strong>Mensagem:</strong></p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;

  const text =
    `Nova mensagem pelo site\n\n` +
    `Nome: ${name}\nEmpresa: ${company || '—'}\nE-mail: ${email}\n` +
    `Telefone: ${phone}\nÁrea: ${area}\n\nMensagem:\n${message}`;

  const result = await sendMail({
    to: CONTACT_TO,
    replyTo: email,
    subject: `Contato pelo site — ${name}`,
    text,
    html,
  });

  if (result.success) {
    return res.status(200).json({ message: 'Mensagem enviada com sucesso.' });
  }

  return res.status(502).json({ message: 'Não foi possível enviar a mensagem. Tente novamente.' });
});

export default router;
