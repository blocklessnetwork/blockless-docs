import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { getHeaders, getRedirect } from 'utils/helpers';
import styles from './ContentWrapper.module.scss';
import cls from 'classnames';
import { DocsNavigation } from 'components/DocsNavigation';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';
import { Loader } from 'components/Loader';
import useWindowSize from 'components/hooks/useWindowSize';
import remarkGfm from 'remark-gfm';
import { contentSource } from 'utils/constants/content-source';
import { desktopWidth } from 'utils/constants/constants';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const ContentWrapper: FC = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();

  const [currentContent, setCurrentContent] = useState('');
  const [activeHeader, setActiveHeader] = useState(0);
  const [loading, setLoading] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headers = contentRef?.current && contentRef?.current?.children;

  const contentPath = useMemo(() => contentSource[pathname], [pathname]);

  const headersRight = useMemo(
    () => (width >= desktopWidth ? (width - desktopWidth) / 2 : 0),
    [width]
  );

  const handleDocumentScroll = () => {
    const body = document.body;

    const headers = contentRef.current?.querySelectorAll('h2');

    const headersOffsets =
      headers &&
      Array.from(headers)
        ?.filter((_, i) => i !== 0)
        .map((header: any) => header.offsetTop);

    const idx = headersOffsets?.findIndex((item) => item >= body.scrollTop);
    idx !== undefined && idx > -1 && setActiveHeader(idx);
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleDocumentScroll);

    return () =>
      document.body.removeEventListener('scroll', handleDocumentScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(contentPath)
      .then((data) => {
        const content = Base64.decode(data?.data?.content);
        setCurrentContent(content);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => setLoading(false));
  }, [contentPath]);

  useEffect(() => {
    setActiveHeader(0);
  }, [pathname]);

  const handleChangeHeader = (i: number) => {
    const wrapper = document.querySelector('body');
    const headerList =
      headers &&
      Array.from(headers).filter((header) => header.tagName === 'H2');
    const currentHeader = (headerList?.[i + 1] as HTMLElement) || null;

    wrapper?.scrollTo({
      top: currentHeader?.offsetTop,
      behavior: 'smooth',
    });
  };

  const headerList = getHeaders(currentContent);

  return (
    <>
      <div ref={pageRef} className={cls(styles.page_wrapper, 'wrapper')}>
        <div className={styles.doc_navigation_wrapper}>
          <DocsNavigation />
        </div>
        <div
          ref={contentRef}
          className={cls(styles.content_wrapper, 'content')}
          style={{ paddingBottom: window.innerHeight / 3 }}
        >
          {loading ? (
            <Loader />
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              transformImageUri={(uri) =>
                uri.startsWith('http') ? uri : `${IMAGE_BASE_URL}${uri}`
              }
              transformLinkUri={(href) =>
                !href.startsWith('http') ? getRedirect(href) : href
              }
            >
              {currentContent}
            </ReactMarkdown>
          )}
        </div>
        <div
          className={styles.headers_content_wrapper}
          style={{ right: headersRight }}
        >
          <div className={styles.headers_wrapper}>
            <ul className={styles.headers}>
              {!!headerList?.length &&
                headerList.map((header, i) => (
                  <li
                    key={i}
                    className={cls(styles.header_item, `header-${i}`, {
                      [styles.active]: i === activeHeader,
                    })}
                    onClick={() => handleChangeHeader(i)}
                  >
                    {header}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
