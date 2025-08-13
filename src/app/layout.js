import './globals.css';

export const metadata = {
  title: {
    default: 'EZII Payroll - Simplified Payroll Management | The EZII Way',
    template: '%s | EZII Payroll'
  },
  description: 'EZII Payroll: Where Complexity Meets Simplicity. Backed by 20+ years of experience, EZII helps you get payroll, leave management, and attendance right without hassle. Real-time processing, automated compliance, and customizable reports.',
  keywords: [
    'payroll software',
    'payroll management',
    'HR payroll system',
    'payroll processing',
    'leave management',
    'attendance tracking',
    'payroll compliance',
    'tax calculations',
    'salary processing',
    'employee payroll',
    'payroll automation',
    'payroll reports',
    'payroll outsourcing',
    'payroll services',
    'EZII payroll',
    'payroll simplified',
    'payroll software India',
    'HR management system',
    'payroll calculation',
    'employee benefits management'
  ],
  authors: [{ name: 'EZII Team' }],
  creator: 'EZII',
  publisher: 'EZII',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ezii-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EZII Payroll - Simplified Payroll Management | The EZII Way',
    description: 'EZII Payroll: Where Complexity Meets Simplicity. Backed by 20+ years of experience, EZII helps you get payroll, leave management, and attendance right without hassle.',
    url: 'https://ezii-website.vercel.app',
    siteName: 'EZII Payroll',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1035,
        height: 695,
        alt: 'EZII Payroll - Simplified Payroll Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZII Payroll - Simplified Payroll Management',
    description: 'EZII Payroll: Where Complexity Meets Simplicity. Real-time processing, automated compliance, and customizable reports.',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2c2ce9" />
        <meta name="author" content="EZII Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ezii-website.vercel.app/" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for potential API calls */}
        <link rel="dns-prefetch" href="//api.ezii-website.vercel.app" />
        <link rel="dns-prefetch" href="//cdn.ezii-website.vercel.app" />

        {/* Google Search Console Verification */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}

        {/* AI Chatbot Script - Updated with cache busting */}
        {/* <script src="/chatbot.js?v=3.2" defer></script> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
