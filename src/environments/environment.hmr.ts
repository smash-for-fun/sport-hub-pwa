// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:5000/smash-for-fun-sport-hub/us-central1/api',
  firebaseConfig: {
    apiKey: 'AIzaSyAI_Z7-qju3zkUaXK7yW68FKDrMMXBeAeM',
    authDomain: 'smash-for-fun-sport-hub.firebaseapp.com',
    databaseURL: 'https://smash-for-fun-sport-hub.firebaseio.com',
    projectId: 'smash-for-fun-sport-hub',
    storageBucket: 'smash-for-fun-sport-hub.appspot.com',
    messagingSenderId: '467616779866'
  },
  hmr: true
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
