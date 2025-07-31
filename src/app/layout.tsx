import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import config from "@/config/config.json";
import theme from "@/config/theme.json";
import Providers from "@/components/Provider";
import { Lato, Roboto } from 'next/font/google';
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});
export const metadata: Metadata = {
  title: "SVSG Lab UEL",
  description: "Author by Nguyen Bao Huy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  return (
    <html suppressHydrationWarning={true} lang="en" className={`${lato.variable} ${roboto.variable}`}>
      <head>
        {/* responsive meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        {/* favicon */}
        <link rel="shortcut icon" href={config.site.favicon}/>
        {/* theme meta */} 
        <meta name="theme-name" content="svsg uel light nextjs"/>
        {/* google font css */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href={`https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`} rel="stylesheet"/>
        {/* theme meta */}
        <meta name="theme-name" content="SVSG UEL "/>
        <meta name="msapplication-TileColor" content="#000000"/> 
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"/>
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
