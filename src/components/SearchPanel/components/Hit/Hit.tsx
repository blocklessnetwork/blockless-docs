import { FC } from 'react';
import styles from './Hit.module.scss';
import { HighLighter } from '../HighLighter';
import { firstLetterUppercase } from 'utils/helpers';
interface HitProps {
  hit: any;
}

const Hit: FC<HitProps> = ({ hit }) => {
  return (
    <div className={styles.result_item}>
      <p className={styles.title}>{hit.title}</p>
      <p className={styles.location}>
        {hit.url
          .split('/')
          .filter((item: string, i: number) => i !== 0)
          .map((item: string) => item && firstLetterUppercase(item))
          .join(' / ')}
      </p>
      <HighLighter attribute="content" hit={hit} />
    </div>
  );
};

export default Hit;
