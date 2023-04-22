import React, { Suspense, useEffect } from "react";
import Layout from "@/src/components/Layout";
import "@/src/styles/globals.css";
import "@/src/components/DocSearch/style/_variables.css";
import "@/src/components/DocSearch/style/button.css";
import "@/src/components/DocSearch/style/modal.css";
import "@/nextra-theme-docs/css/styles.css"
import { Router } from "next/router"
import Head from "next/head"

const useInterceptNextDataHref = ({
  router,
  namespace,
}: {
  router: Router;
  namespace: string;
}) => {
  useEffect(() => {
    if (router.pageLoader?.getDataHref) {
      const originalGetDataHref = router.pageLoader.getDataHref;
      router.pageLoader.getDataHref = function (...args: any[]) {
        // @ts-ignore
        const r = originalGetDataHref.call(router.pageLoader, ...args);
        return r && r.startsWith('/_next/data')
          ? `/${namespace}${r}`
          : r;
      };
    }
  }, [router, namespace]);
};

const App = ({ Component, pageProps, router }: any) => {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout {...pageProps}>{page}</Layout>);
  const Child = getLayout(<Component {...pageProps} />);

  useInterceptNextDataHref({
    router,
    namespace: 'docs',
  })

  return (
    <>
      <Head>
        <title>Blockless - Support</title>
        <meta name="description" content="Blockless - Support"></meta>
      </Head>
      <Suspense fallback={<>loading...</>}>{Child}</Suspense>
    </>
  );
};

export default App;
