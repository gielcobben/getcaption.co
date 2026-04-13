import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/manifest.json" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/images/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="description"
          content="Caption takes the effort out of finding and setting up the right subtitles."
        />

        <meta itemProp="name" content="Caption — Start watching" />
        <meta
          itemProp="description"
          content="Caption takes the effort out of finding and setting up the right subtitles."
        />
        <meta
          itemProp="image"
          content="https://getcaption.co/images/cover.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gielcobben" />
        <meta name="twitter:title" content="Caption — Start watching" />
        <meta
          name="twitter:description"
          content="Caption takes the effort out of finding and setting up the right subtitles."
        />
        <meta name="twitter:creator" content="@gielcobben" />
        <meta
          name="twitter:image:src"
          content="https://getcaption.co/images/cover.png"
        />

        <meta property="og:title" content="Caption — Start watching" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://getcaption.co/" />
        <meta
          property="og:image"
          content="https://getcaption.co/images/cover.png"
        />
        <meta
          property="og:description"
          content="Caption takes the effort out of finding and setting up the right subtitles."
        />
        <meta property="og:site_name" content="Caption – Start watching" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
