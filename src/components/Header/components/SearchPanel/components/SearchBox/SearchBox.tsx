import { FC, useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useLocation } from 'react-router-dom';
import styles from './SearchBox.module.scss';

interface SearchBoxProps {
  currentRefinement: string;
  refine: any;
}

const SearchBox: FC<SearchBoxProps> = ({ currentRefinement, refine }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    refine('');
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div className={styles.inputBox}>
      <input
        type="search"
        placeholder='Search'
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      {!currentRefinement && <div className={styles.icon} />}
    </div>
  );
};

export default connectSearchBox(SearchBox);
