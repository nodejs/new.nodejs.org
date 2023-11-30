'use client';

import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';
import { useClientContext, useSiteNavigation } from '@/hooks';
import { useRouter } from '@/navigation.mjs';
import { availableLocales } from '@/next.locales.mjs';

const WithNavBar: FC = () => {
  const { navigationItems } = useSiteNavigation();
  const { resolvedTheme, setTheme } = useTheme();
  const { pathname } = useClientContext();
  const { replace } = useRouter();

  const locale = useLocale();

  const toggleCurrnetTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <NavBar
      onThemeTogglerClick={toggleCurrnetTheme}
      languages={{
        currentLanguage: locale,
        availableLanguages: availableLocales,
        onChange: locale => replace(pathname!, { locale: locale.code }),
      }}
      navItems={navigationItems.map(([, { label, link }]) => ({
        link,
        text: label,
      }))}
    />
  );
};

export default WithNavBar;
