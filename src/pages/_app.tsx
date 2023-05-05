import React, { Suspense } from "react";
import "@/src/styles/globals.css";

const App = ({ Component, pageProps }: any) => {

  return (
    <Suspense fallback={<>loading...</>}><Component {...pageProps} /></Suspense>
  );
};

export default App;
