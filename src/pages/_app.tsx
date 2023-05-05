import React, { Suspense, useEffect } from "react";
import "@/src/styles/globals.css";
import "@/src/components/DocSearch/style/_variables.css";
import "@/src/components/DocSearch/style/button.css";
import "@/src/components/DocSearch/style/modal.css";
import { Router } from "next/router"

const App = ({ Component, pageProps, router }: any) => {

  return (
    <Suspense fallback={<>loading...</>}><Component {...pageProps} /></Suspense>
  );
};

export default App;
