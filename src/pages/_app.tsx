import React, { Suspense, useEffect, useMemo } from "react";
import Layout from "@/src/components/Layout";
import Head from "next/head";
import "@/src/styles/globals.css";
import "@/src/components/DocSearch/style/_variables.css";
import "@/src/components/DocSearch/style/button.css";
import "@/src/components/DocSearch/style/modal.css";
import { Router } from "next/router"

const TITLE = "Blockless - Support";
const DESCRIPTION = "Blockless - Support";

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
      <Suspense fallback={<>loading...</>}>{Child}</Suspense>
      {/* <Suspense fallback={<>loading...</>}><Component /></Suspense> */}
    </>
  );
};

export default App;
