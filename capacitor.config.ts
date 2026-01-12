import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartplanner.app',
  appName: 'Smart Planner',
  webDir: 'dist/smart-planner-app/browser',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      // For Native Google Sign-In (Android/iOS), replace this with your Web Client ID.
      // If using the Generic APK (BYOK), this is ignored as we use the Web SDK.
      serverClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
