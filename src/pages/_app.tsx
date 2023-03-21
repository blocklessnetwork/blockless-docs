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
  const { markdoc }: any = pageProps;
  const getLayout =
    Component.getLayout || ((page: any) => <Layout {...pageProps}>{page}</Layout>);
  const Child = getLayout(<Component {...pageProps} />);

  const title = useMemo(()=>{
    return (markdoc?.frontmatter?.title ? markdoc.frontmatter.title + " – " : "") + TITLE;
  },[markdoc])

  const description = useMemo(()=>{
    return markdoc?.frontmatter?.description || DESCRIPTION;
  },[markdoc])

  useInterceptNextDataHref({
    router,
    namespace: 'docs',
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>
      <Suspense fallback={<>loading...</>}>{Child}</Suspense>
    </>
  );
};

export default App;
