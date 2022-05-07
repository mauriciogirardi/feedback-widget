import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'be8ee725528b24',
    pass: 'f26c45f6790076',
  },
})

export class NodeMailerMailAdapter implements MailAdapter {
  public async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <feedget@info.com>',
      to: 'Mauricio Girardi <maurigirarde@yahoo.com.br>',
      subject,
      html: body,
    })
  }
}
