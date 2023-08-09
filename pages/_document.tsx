import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';
import * as nextConstants from '@/next.constants.mjs';

const Document = () => (
  <Html>
    <Head />
    <body>
      <Main />

      <NextScript />

      <Script
        strategy="beforeInteractive"
        src={nextConstants.LEGACY_JAVASCRIPT_FILE}
      />

      <script
        id="initial-theme-script"
        dangerouslySetInnerHTML={{
          __html: nextConstants.INITIAL_THEME_SCRIPT,
        }}
      />

      <a rel="me" href="https://social.lfx.dev/@nodejs" />
    </body>
  </Html>
);

export default Document;
