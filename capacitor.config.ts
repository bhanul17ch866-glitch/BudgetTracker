import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bhanu.budgettracker',
  appName: 'Budget Tracker',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#0f1117'
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 350,
      backgroundColor: '#0f1117',
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0f1117'
    }
  }
};

export default config;
