import React from "react";
import Layout from "@/components/Layout";
import Upload from "@/components/Upload";
import Script from "next/script";
import Head from "next/head";
import Hero from "@/components/Hero";
import Action from "@/components/Action";

function Home(props) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1RQ9Q9224H"
      ></Script>
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1RQ9Q9224H');

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
