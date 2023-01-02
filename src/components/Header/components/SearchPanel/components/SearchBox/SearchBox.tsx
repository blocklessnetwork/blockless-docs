import { FC, useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useLocation } from 'react-router-dom';

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
    <input
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  );
};

export default connectSearchBox(SearchBox);
