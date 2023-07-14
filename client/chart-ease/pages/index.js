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
