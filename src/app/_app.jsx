import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
