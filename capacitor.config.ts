import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spotted.app',
  appName: 'spotted',
  webDir: 'dist/spotted/browser',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '1067979219164-poo6kf57d970719aqtak12j3g3nd63u7.apps.googleusercontent.com',
      androidClientId:
        '397350852908-androidclientid.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
