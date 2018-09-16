import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { AuthService } from './auth/auth.service';
import { MailService } from './mailing/mail.service';

export class Application {
  app: express.Application;
  auth: AuthService;
  mailService: MailService;


  constructor() {
    this.app = express();
    this.mailService = new MailService();
    this.auth = new AuthService();
    this.setup();
  }

  private setup() {
    this.setupCookieHandler();
    this.setupAuthentication();
    this.setupRouting();
    this.setupCors();
  }

  private setupCookieHandler() {
    this.app.use(cookieParser());
  }

  private setupCors() {
    this.app.use(cors({origin: ['http://localhost:4200']}));
  }

  private setupAuthentication() {
    console.info('Setting up validation');
    this.app.use(this.auth.validateFirebaseIdToken);
  }

  private setupRouting() {
    this.app.get('/testmail', (req: any, res: any) => {
      this.mailService.sendTestMail(req.user).then(r => {
        res.send(r);
      });
    });
  }
}
