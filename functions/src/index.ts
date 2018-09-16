import * as functions from 'firebase-functions';
import { Application } from './application';


const application = new Application();

export const api = functions.https.onRequest(application.app);
