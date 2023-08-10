import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { PrefersContext, themes, ThemeType } from '@/lib/use-prefers';
import Menu from '@/components/navigation/menu';
import Footer from '@/components/footer';

const DashboardApp = ({ Component, pageProps }: AppProps) => {
  const [themeType, setThemeType] = useState<ThemeType>('dark');

  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');

    const theme = window.localStorage.getItem('theme') as ThemeType;
    if (themes.includes(theme)) setThemeType(theme);
  }, []);

  const switchTheme = useCallback((theme: ThemeType) => {
    setThemeType(theme);
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Портал — Облачная диалоговая операционная система и персональные автономные цифровые ассистенты на основе технологий искуственного интеллекта.</title>
        <meta name="google" content="notranslate" />
        <meta name="twitter:creator" content="@echo_witt" />
        <meta name="referrer" content="strict-origin" />
        <meta property="og:title" content="Портал" />
        <meta property="og:site_name" content="Портал" />
        <meta property="og:url" content="https://prtl.cc" />
        <link rel="dns-prefetch" href="//geist-ui.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="generator" content="Портал" />
        <meta
          name="description"
          content="An open-source design system for building modern websites and applications."
        />
        <meta
          property="og:description"
          content="An open-source design system for building modern websites and applications."
        />
        <meta
          itemProp="image"
          property="og:image"
          content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/11304944/91128466-dfc96c00-e6da-11ea-8b03-a96e6b98667d.png"
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>React Dashboard Design</title>
        <meta name="og:title" content="React Dashboard Design" />
        <meta name="og:description" content="Inspired by and based on the Vercel™ Design System." />
        <meta name="description" content="Inspired by and based on the Vercel™ Design System." />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
>>>>>>> 5fa053a03be616f2abdb8db8372da88a0681fe13
        />
      </Head>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PrefersContext.Provider value={{ themeType, switchTheme }}>
          <Menu />
          <Component {...pageProps} />
          <Footer />
        </PrefersContext.Provider>
      </GeistProvider>
    </>
  );
};

export default DashboardApp;
