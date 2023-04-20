import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import cls from 'classnames';
import styles from './index.module.scss';
import { isActiveMenu } from '@/src/utils/helpers';
import { navbarMenu } from '@/src/utils/constants/links';


const Navbar: FC = () => {
  const router = useRouter()

  return (
    <nav>
      <ul className={styles.list_wrapper}>
        {navbarMenu.map((item: any) => (
          <li
            key={item.name}
            className={cls({
              [styles.active]: isActiveMenu(router.pathname, item.path),
            })}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
