import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Surya Kamineni',
  description: 'Front-End Developer Portfolio',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
