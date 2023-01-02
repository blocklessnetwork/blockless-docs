import axios from 'axios';
import { DocsNavigation } from 'components/DocsNavigation';
import { Loader } from 'components/Loader';
import { Base64 } from 'js-base64';
import { FC, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import styles from './ConceptsReference.module.scss';
import remarkGfm from 'remark-gfm';
import { contentSource } from 'utils/constants/content-source';
import { getRedirect } from 'utils/helpers';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

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
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ConceptsReference;
