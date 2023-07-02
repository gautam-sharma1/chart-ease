import React from "react";
import Layout from "@/components/core/Layout";
import Upload from "@/components/core/Upload";
import Script from "next/script";
import Head from "next/head";
import Hero from "@/components/core/Hero";
import Action from "@/components/core/Action";

function Home(props) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1RQ9Q9224H"
      ></Script>
      {/* <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1RQ9Q9224H');

    `}
      </Script> */}
      <Script>
        {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KKDDCGR');
  `}
      </Script>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Chart Ease</title>
      </Head>
      <Layout>
        <Hero />
        <Action />
        <Upload />
      </Layout>
    </>
  );
}

export default Home;
