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
          <title>Caption – Start watching</title>
        </Head>
        <body>
          {/* Facebook */}
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
