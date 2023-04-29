import React, { Suspense, useEffect } from "react";
import "@/src/styles/globals.css";
import "@/src/components/DocSearch/style/_variables.css";
import "@/src/components/DocSearch/style/button.css";
import "@/src/components/DocSearch/style/modal.css";
import { Router } from "next/router"

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

  useInterceptNextDataHref({
    router,
    namespace: 'docs',
  })

  return (
    <Suspense fallback={<>loading...</>}><Component {...pageProps} /></Suspense>
  );
};

export default App;
