import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';
import * as xoauth from 'xoauth2';

export class MailService {
  private transporter: nodemailer.Transporter;
  private config: functions.config.Config;

  // TODO: fix this, not working right now
  private oauthSettings;

  constructor() {
    this.config = functions.config();

    // this.oauthSettings = {
    //   clientId: this.config.gmail.client_id,
    //   clientSecret: this.config.gmail.client_secret,
    //   // refreshToken: this.config.mail.refreshToken,
    //   // accessToken: this.config.mail.accessToken,
    //   user: this.config.gmail.user,
    //   // expires: this.config.mail.expires
    // };


    console.info('CONFIG!', this.config)

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        xoauth: xoauth.createXOAuth2Generator({
          user: 'glenn.latomme@gmail.com',
          clientId: this.config.gmail.client_id,
          clientSecret: this.config.gmail.client_secret,
          refreshToken: '1/jZfInk90GT-L-vzXwV4nYlrifEGBE8FP2R5u4W22m_A'
        } as any)
      } as any
    });

    console.log(this.config)


    // TODO: Check if this is working
    this.transporter.on('token', token => {
      console.log('A new access token was generated');
      console.log('User: %s', token.user);
      console.log('Access Token: %s', token.accessToken);
      console.log('Expires: %s', new Date(token.expires));

      // this.oauthSettings.accessToken = token.accessToken;
      // this.oauthSettings.expires = token.expires;
    });
  }


  sendTestMail(user: any) {
    console.info('Sending mail to', user.email);


    const mailOptions = {
      from: 'no-reply@smashforfun.be',
      to: user.email,
      subject: `Hello ${user.name}`,
      html: `<p>Hello ${user.name}</p>`,
    };

    return this.transporter.sendMail(mailOptions);
  }



}
