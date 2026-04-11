import type { Metadata, Viewport } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const notoKufiArabic = Noto_Kufi_Arabic({ 
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: 'Ù†ÙˆØªÙˆ | Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø·Ø¹Ø§Ù…',
  description: 'Ù…Ù†ÙŠÙˆ Ø±Ù‚Ù…ÙŠ ØªÙØ§Ø¹Ù„ÙŠ Ø¹ØµØ±ÙŠ',
  icons: {
    icon: 'data:,',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark" data-scroll-behavior="smooth">
      <body className={`${notoKufiArabic.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

