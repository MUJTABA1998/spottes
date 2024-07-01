import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
GoogleAuth.initialize({
  // clientId: '397350852908-5ubsfmeprfr2plu11gjcnrgiqaq8mu9b.apps.googleusercontent.com',
  clientId: '1067979219164-3tm4mgt8q7p5is9tfeftc0hcd7koejna.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
