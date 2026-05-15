import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import { SwatchProvider } from '../components/swatch-provider';
import { PageTransition } from '../components/page-transition';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'The Thread of the Land',
  description: 'A luxury textile archive blending heritage craft with studio innovation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
        <SwatchProvider>
          <PageTransition>{children}</PageTransition>
        </SwatchProvider>
      </body>
    </html>
  );
}
