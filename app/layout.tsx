import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "CarFlow - Sistema Completo para Lava-Jatos | Agendamento Online e Gestão",
    template: "%s | CarFlow"
  },
  description: "Transforme seu lava-jato com o CarFlow! Sistema completo com agendamento online, WhatsApp automático, dashboard analítico e pagamentos integrados. Aumente sua receita em até 300%. Teste grátis 14 dias!",
  keywords: [
    "sistema lava-jato",
    "gestão lava-jato", 
    "agendamento online lava-jato",
    "software lava-jato",
    "dashboard lava-jato",
    "WhatsApp automático",
    "controle pedidos",
    "pagamento PIX",
    "CarFlow",
    "sistema gestão automotiva",
    "aplicativo lava-jato",
    "software automotivo"
  ],
  authors: [{ name: "CarFlow Team" }],
  creator: "CarFlow",
  publisher: "CarFlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://carflow.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://carflow.com.br',
    siteName: 'CarFlow',
    title: 'CarFlow - Sistema Completo para Lava-Jatos',
    description: 'Transforme seu lava-jato em um negócio digital com agendamento online, WhatsApp automático e dashboard analítico. Teste grátis por 14 dias!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CarFlow - Sistema para Lava-Jatos',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarFlow - Sistema Completo para Lava-Jatos',
    description: 'Transforme seu lava-jato com agendamento online, WhatsApp automático e muito mais. Teste grátis!',
    images: ['/og-image.jpg'],
    creator: '@carflow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'business',
  classification: 'Business Software',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  applicationName: 'CarFlow',
  appleWebApp: {
    capable: true,
    title: 'CarFlow',
    statusBarStyle: 'default',
  },
  verification: {
    google: 'google-site-verification-code', 
    yandex: 'yandex-verification-code', 
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        
        <meta name="geo.region" content="BR-MG" />
        <meta name="geo.placename" content="Belo Horizonte" />
        <meta name="geo.position" content="-19.919054;-43.938755" />
        <meta name="ICBM" content="-19.919054, -43.938755" />
        
        <meta property="business:contact_data:street_address" content="Belo Horizonte" />
        <meta property="business:contact_data:locality" content="Minas Gerais" />
        <meta property="business:contact_data:region" content="BR" />
        <meta property="business:contact_data:postal_code" content="30000-000" />
        <meta property="business:contact_data:country_name" content="Brasil" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CarFlow",
              "url": "https://carflow.com.br",
              "logo": "https://carflow.com.br/logo.png",
              "description": "Sistema completo de gestão para lava-jatos",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-31-98520-1743",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.facebook.com/carflow",
                "https://www.instagram.com/carflow",
                "https://www.linkedin.com/company/carflow"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50"
        >
          Pular para o conteúdo principal
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* Script de analytics (Google Analytics, etc.) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}