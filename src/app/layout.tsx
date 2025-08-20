// import './globals.css';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from 'next-themes';
// const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

// export const metadata = {
//   title: 'Surya Kamineni',
//   description: 'Front-End Developer Portfolio',
// };


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem={false}
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Surya Kamineni',
  description: 'Front-End Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WEJSMQCW4T"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WEJSMQCW4T');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
