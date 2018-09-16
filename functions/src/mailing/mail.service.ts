import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';
import { UserModel } from '../../../src/app/modules/user/models/user.model';


export class MailService {
  private transporter: nodemailer.Transporter;
  private config: functions.config.Config;

  constructor() {
    this.config = functions.config();

    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.config.user,
        pass: this.config.password
      }
    });
  }

  sendTestMail(user: UserModel) {
    console.info('Sending mail');
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'no-reply@smashforfun.be',
      to: user.email,
      subject: `Hello ${user.displayName}`,
      html: `<p>Hello ${user.displayName}</p>`
    };

    return this.transporter.sendMail(mailOptions);
  }
}
