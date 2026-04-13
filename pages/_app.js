import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caption – Start watching</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
