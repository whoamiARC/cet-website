import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LiquidBackground } from "@/components/liquid-background";
import { APP_NAME, APP_URL } from "@/lib/const";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${APP_NAME} - 英语四六级备考信息平台 | 完全免费`,
    template: `%s | ${APP_NAME}`,
  },
  description: "CET通 - 英语四六级备考一站式信息平台。提供考试资讯、备考指导、学习资源。完全免费，无需注册。",
  keywords: ["英语四级", "英语六级", "CET4", "CET6", "四六级备考", "四六级资讯", "CET通", "免费"],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  other: {
    "google-adsense-account": "ca-pub-5246729298526511",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} - 英语四六级备考信息平台`,
    description: "完全免费的四六级备考信息平台。考试资讯 + 备考指导，助你一次过级！",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - 英语四六级备考`,
    description: "完全免费的四六级备考信息平台",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.classList.add("dark")}})()`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <Script
          id="google-adsense-bootstrap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () {
              if (window.location.origin !== 'https://www.cettong.cn') return;
              if (document.querySelector('script[data-cettong-adsense]')) return;
              var script = document.createElement('script');
              script.async = true;
              script.crossOrigin = 'anonymous';
              script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5246729298526511';
              script.setAttribute('data-cettong-adsense', 'true');
              document.head.appendChild(script);
            })();`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3T5MQTB1F"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M3T5MQTB1F');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: APP_NAME,
              description: "英语四六级备考信息平台",
              url: APP_URL,
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CN",
              },
            }),
          }}
        />
        <meta name="baidu-site-verification" content="codeva-92mWbQ8zMr" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <LiquidBackground />
        <Header />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
