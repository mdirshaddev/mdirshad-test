import "./globals.css";
import "./mdx.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { type Metadata } from "next";

import Script from "next/script";

import { WebVitals } from "./web-vitals";
import { RootProvider } from "./root-provider";

export const metadata: Metadata = {
  category: "Personal Website",
  colorScheme: "dark",
  description: "Building things for better future",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
  },
  manifest: "/manifest.webmanifest",
  themeColor: [
    { color: "white", media: "(prefers-color-scheme: light)" },
    { color: "black", media: "(prefers-color-scheme: dark)" },
  ],
  title: "Md Irshad - 🐋 Software Developer",
};

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        {/* Microsoft Clarity */}
        <Script
          type="text/javascript"
          strategy="afterInteractive"
          id="behaviour-analytics"
        >
          {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", ${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY});
          `}
        </Script>
        <WebVitals />
      </body>
    </html>
  );
}
