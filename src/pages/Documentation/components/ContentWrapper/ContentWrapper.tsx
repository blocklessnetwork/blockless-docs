import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { getHeaders, getRedirect } from 'utils/helpers';
import styles from './ContentWrapper.module.scss';
import cls from 'classnames';
import { DocsNavigation } from 'components/DocsNavigation';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';
import useWindowSize from 'components/hooks/useWindowSize';
import remarkGfm from 'remark-gfm';
import { contentSource, IMAGE_BASE_URL } from 'utils/constants/content-source';
import { desktopWidth } from 'utils/constants/constants';
import Skeleton from 'react-loading-skeleton';
import { CodeBlock, atomOneLight } from "react-code-blocks";

// const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

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

    const headers = contentRef.current?.querySelectorAll('h1,h2');

    const headersOffsets =
      headers &&
      Array.from(headers)
        ?.filter((_, i) => i !== 0)
        .map((header: any) => header.offsetTop);

    const idx = headersOffsets?.findLastIndex((item) => item < body.scrollTop + 32);
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
        let content = Base64.decode(data?.data?.content);
        // custom callout style
        content = content.replaceAll(/\{% callout %\}([\s\S]*)\{% \/callout %\}/g, '```callout $1 ```');
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
      Array.from(headers).filter((header) => ['H1', 'H2'].includes(header.tagName));
    const currentHeader = (headerList?.[i + 1] as HTMLElement) || null;

    wrapper?.scrollTo({
      top: i === 0 ? 0 : currentHeader?.offsetTop - 32,
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
        >
          {loading ? (
            <ContentSkeleton />
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              transformImageUri={(uri) =>
                uri.startsWith('http') ? uri : `${IMAGE_BASE_URL}${uri}`
              }
              transformLinkUri={(href) =>
                !href.startsWith('http') ? getRedirect(href) : href
              }
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  if (className === 'language-callout') {
                    return <p className='callout'>{children}</p>
                  } else {
                    return !inline && match ? (
                      <CodeBlock
                        text={children}
                        language={match[1]}
                        showLineNumbers={true}
                        startingLineNumber={true}
                        theme={atomOneLight}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                },
                img: ({node, ...props}) => <div className="img_box"><img {...props} /></div>,
              }}
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

const ContentSkeleton = () => {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <h2><Skeleton /></h2>
      <Skeleton count={5} style={{ marginBottom: '0.5em' }} />
      <h2 style={{ marginTop: '1em' }}><Skeleton /></h2>
      <Skeleton count={8} style={{ marginBottom: '0.5em' }} />
    </div>
  )
}

export default ContentWrapper;
