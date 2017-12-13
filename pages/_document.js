import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Prototype" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://getcaption.co/static/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://getcaption.co/static/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://getcaption.co/static/images/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="https://getcaption.co/static/images/manifest.json"
          />
          <link
            rel="mask-icon"
            href="https://getcaption.co/static/images/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="https://getcaption.co/static/images/favicon.ico"
          />
          <meta
            name="msapplication-config"
            content="https://getcaption.co/static/images/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <title>Caption – Start watching</title>
          <meta
            name="description"
            content="Caption takes the effort out of finding and setting up the right subtitles."
          />
          <link
            rel="shortcut icon"
            href="/static/images/favicon.ico?ref=cachebuster"
          />

          <meta itemProp="name" content="Caption — Start watching" />
          <meta
            itemProp="description"
            content="Caption takes the effort out of finding and setting up the right subtitles."
          />
          <meta
            itemProp="image"
            content="https://getcaption.co/static/images/cover.png"
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
            content="https://getcaption.co/static/images/cover.png"
          />

          <meta property="og:title" content="Caption — Start watching" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://getcaption.co/" />
          <meta
            property="og:image"
            content="https://getcaption.co/static/images/cover.png"
          />
          <meta
            property="og:description"
            content="Caption takes the effort out of finding and setting up the right subtitles."
          />
          <meta property="og:site_name" content="Caption – Start watching" />
          <meta property="fb:app_id" content="231104767338918" />
        </Head>

        <body>
          <div id="fb-root" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=231104767338918';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`,
            }}
          />

          <Main />
          <NextScript />

          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
          <script async defer src="https://buttons.github.io/buttons.js" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-89238300-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-89238300-1');`,
            }}
          />
        </body>
      </html>
    );
  }
}
