import React from "react";
import Layout from "@/components/Layout";
import Upload from "@/components/Upload";
import Script from "next/script";

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
      <Layout>
        <Upload />
      </Layout>
    </>
  );
}

export default Home;
