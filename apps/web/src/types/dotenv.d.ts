declare module NodeJS {
  interface ProcessEnv {
    // Google Analytics
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;

    // Microsoft Clarity
    NEXT_PUBLIC_MICROSOFT_CLARITY: string;

    //GitHub OAuth Client ID and Secret
    GITHUB_ID: string;
    GITHUB_SECRET: string;

    // Next Auth
    NEXTAUTH_SECRET: string;
  }
}
