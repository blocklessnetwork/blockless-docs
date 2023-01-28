import axios from 'axios';
import { DocsNavigation } from 'components/DocsNavigation';
import { Base64 } from 'js-base64';
import { FC, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import styles from './ConceptsReference.module.scss';
import remarkGfm from 'remark-gfm';
import { contentSource, IMAGE_BASE_URL } from 'utils/constants/content-source';
import { getRedirect } from 'utils/helpers';
import Skeleton from 'react-loading-skeleton';

// const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const ConceptsReference: FC = () => {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string>('');
  const path = useMemo(() => contentSource[pathname], [pathname]);

  useEffect(() => {
    document.body.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    if (!path) return;
    setLoading(true);
    axios
      .get(path)
      .then((data) => {
        const content = Base64.decode(data?.data?.content);
        setContent(content);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => setLoading(false));
  }, [path]);

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.doc_navigation_wrapper}>
        <DocsNavigation />
      </div>
      <div className={styles.content_wrapper}>
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
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

const ContentSkeleton = () => {
  return (
    <div style={{position: 'relative', zIndex: 0}}>
      <h2><Skeleton /></h2>
      <Skeleton count={5} style={{marginBottom: '0.5em'}} />
      <h2 style={{marginTop: '1em'}}><Skeleton /></h2>
      <Skeleton count={8} style={{marginBottom: '0.5em'}} />
    </div>
  )
} 

export default ConceptsReference;
