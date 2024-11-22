declare global {
    namespace NodeJS {
      interface ProcessEnv {
        EXPO_PUBLIC_FIREBASE_API_KEY: string;
        EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
        EXPO_PUBLIC_FIREBASE_PROJECT_ID: string;
        EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
        EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
        EXPO_PUBLIC_FIREBASE_APP_ID: string;
        EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      }
    }
  }
  
  // Need to export something for TypeScript to recognize this as a module
  export {};