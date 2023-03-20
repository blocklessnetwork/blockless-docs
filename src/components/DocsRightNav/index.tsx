import React, { useState, useEffect, useMemo, useRef } from "react";
import cls from "classnames";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

interface DocsRightNavProps {
  markdoc: any;
  contentRef: any;
}
const DocsRightNav: React.FC<DocsRightNavProps> = ({ markdoc, contentRef }) => {
  const router = useRouter();
  const [activeHeader, setActiveHeader] = useState<number>();
  const headersOffsetsRef = useRef([]);
  const { content = {} } = markdoc;

  const headerList = useMemo(() => {
    return (
      content.children
        ?.filter((v: any) => ["h1", "h2"].includes(v.name))
        .map((v: any) => {
          return {
            id: v.attributes.id,
            name: v.children[0],
          };
        }) || []
    );
  }, [content.children]);

  useEffect(() => {
    const hash = router.asPath.split("#")[1] || "";
    const index = headerList.findIndex(
      (v: any) => v.id === decodeURIComponent(hash)
    );
    setActiveHeader(index === -1 ? 0 : index);
  }, [headerList, router.asPath]);

  useEffect(() => {
    const headers = contentRef.current?.querySelectorAll("h1,h2");
    headersOffsetsRef.current =
      headers &&
      Array.from(headers).map((header: any) => header.offsetTop);
  }, [contentRef, content.children]);

  const handleChangeHeader = (header: any, i: number) => {
    router.push(`#${header.id}`);
    // const wrapper = document.querySelector('body');
    // const headerList =
    //   headers &&
    //   Array.from(headers).filter((header) => ['H1', 'H2'].includes(header.tagName));
    // const currentHeader = (headerList?.[i + 1] as HTMLElement) || null;

    // wrapper?.scrollTo({
    //   top: i === 0 ? 0 : currentHeader?.offsetTop - 32,
    //   behavior: 'smooth',
    // });
  };

  const handleDocumentScroll = () => {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset;
    const idx = headersOffsetsRef.current?.findLastIndex((v) => v < scrollTop + 36);
    idx !== undefined && idx > -1 && setActiveHeader(idx);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleDocumentScroll);

    return () =>
      document.removeEventListener("scroll", handleDocumentScroll);
  }, []);

  return (
    <div className={styles.headers_wrapper}>
      <ul className={styles.headers}>
        {headerList.map((v: any, i: number) => (
          <li
            key={i}
            className={cls(styles.header_item, `header-${i}`, {
              [styles.active]: i === activeHeader,
            })}
            onClick={() => handleChangeHeader(v, i)}
          >
            {v.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocsRightNav;
