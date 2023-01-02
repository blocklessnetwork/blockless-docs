import { FC } from 'react';
import { connectHighlight } from 'react-instantsearch-dom';
import parser from 'html-react-parser';
import styles from './Highlighter.module.scss';
import { useNavigate } from 'react-router-dom';

interface HighLighterProps {
  highlight: any;
  attribute: string;
  hit: any;
}

const HighLighter: FC<HighLighterProps> = ({ highlight, hit, attribute }) => {
  const parsedHit = highlight({
    highlightProperty: '_snippetResult',
    // highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  const navigate = useNavigate();

  return (
    <div className={styles.result_text} onClick={() => navigate(hit.url)}>
      {parsedHit.map(
        (part: { isHighlighted: boolean; value: string }, index: number) =>
          part.isHighlighted ? (
            <mark key={index}>{parser(part.value)}</mark>
          ) : (
            <span className={styles.result_item} key={index}>
              {parser(part.value)}
            </span>
          )
      )}
    </div>
  );
};

export default connectHighlight(HighLighter);
