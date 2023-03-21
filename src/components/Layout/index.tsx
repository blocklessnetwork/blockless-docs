import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DocsLayout from "./DocsLayout";
import styles from "./index.module.scss";

interface PropsTypes {
  children: React.ReactNode;
  markdoc: any;
}

const Layout: React.FC<PropsTypes> = ({ children, markdoc }) => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        {markdoc ? <DocsLayout markdoc={markdoc}>{children}</DocsLayout> : children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
