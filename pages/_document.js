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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="description" content="Prototype" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <link rel="shortcut icon" href="favicon.ico" />

          <title>Caption – Start watching</title>
          <meta
            name="description"
            content="The ultimate Sketch library for user flows, content maps, screen annotations, and more."
          />
          <link rel="stylesheet" href="assets/css/screen.css" />
          <link rel="shortcut icon" href="favicon.ico?ref=cachebuster" />

          <meta itemprop="name" content="Flowkit for Sketch" />
          <meta
            itemprop="description"
            content="The ultimate Sketch library for user flows, content maps, screen annotations, and more."
          />
          <meta
            itemprop="image"
            content="https://mds-assets.s3.amazonaws.com/flowkit/flowkit-card.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mds" />
          <meta name="twitter:title" content="Flowkit for Sketch" />
          <meta
            name="twitter:description"
            content="The ultimate Sketch library for user flows, content maps, screen annotations, and more."
          />
          <meta name="twitter:creator" content="@mds" />
          <meta
            name="twitter:image:src"
            content="https://mds-assets.s3.amazonaws.com/flowkit/flowkit-card.jpg"
          />

          <meta property="og:title" content="Flowkit for Sketch" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://flowk.it" />
          <meta
            property="og:image"
            content="https://mds-assets.s3.amazonaws.com/flowkit/flowkit-card.jpg"
          />
          <meta
            property="og:description"
            content="The ultimate Sketch library for user flows, content maps, screen annotations, and more."
          />
          <meta property="og:site_name" content="Flowkit for Sketch" />
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
        </body>
      </html>
    );
  }
}
