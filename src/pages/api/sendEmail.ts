import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "mail.dotspot.com.br",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@dotspot.com.br",
    pass: "d0tt152013@##",
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const info = await transporter.sendMail({
        from: '"Landing Page" <no-reply@dotspot.com.br>',
        to: "bruno.santos@faculdadefama.edu.br", 
        subject: "Email via Landing Page",
        text: text,
      });
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ message: 'Erro ao enviar email. Tente novamente mais tarde.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}