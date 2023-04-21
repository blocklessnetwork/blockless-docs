import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./index.module.scss";

interface PropsTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropsTypes> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
