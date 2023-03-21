import React, { useRef, useEffect } from "react";
import cls from "classnames";
import DocsLeftNav from "@/src/components/DocsLeftNav";
import DocsRightNav from "@/src/components/DocsRightNav";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

interface PropsTypes {
  children: React.ReactNode;
  markdoc: any;
}

const Docs: React.FC<PropsTypes> = ({ children, markdoc }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const docsRightNavRef = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  useEffect(()=>{
    if(docsRightNavRef.current) docsRightNavRef.current.scrollTop = 0;
  }, [pathname])

  return (
    <div className={cls(styles.docs_wrapper, "wrapper")}>
      <div className={styles.doc_navigation_wrapper}>
        <DocsLeftNav />
      </div>
      <div className={cls(styles.content_wrapper, "content")} ref={contentRef}>{children}</div>
      <div className={styles.headers_content_wrapper} ref={docsRightNavRef}>
        <DocsRightNav markdoc={markdoc} contentRef={contentRef}  />
      </div>
    </div>
  );
};

export default Docs;
