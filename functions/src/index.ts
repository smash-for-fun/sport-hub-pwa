import * as functions from 'firebase-functions';
import { Application } from './application';
import * as admin from 'firebase-admin';

admin.initializeApp();

const application = new Application();

export const api = functions.https.onRequest(application.app);
