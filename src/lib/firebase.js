import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

/**
 * Firebase web config, supplied through Vite env vars (see `.env.example`).
 * `.env` is git-ignored — copy `.env.example` to `.env` and fill in the values
 * from the Firebase console (Project settings → Your apps → SDK config).
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export const app = isConfigured ? initializeApp(firebaseConfig) : null;

/**
 * Analytics is browser-only and unavailable in some environments (SSR, private
 * modes, blockers). Resolves to the Analytics instance where it can load, else
 * `null`. Only initialised in production builds with a valid config.
 */
export const analyticsReady =
  app && import.meta.env.PROD && typeof window !== 'undefined'
    ? isSupported().then((ok) => (ok ? getAnalytics(app) : null))
    : Promise.resolve(null);

if (!isConfigured && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.info('[firebase] no VITE_FIREBASE_* env found — Firebase disabled. Copy .env.example to .env.');
}
