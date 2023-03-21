import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import cls from 'classnames';
import styles from './index.module.scss';
import { getActivePage } from '@/src/utils/helpers';
import { navbarMenu } from '@/src/utils/constants/links';


const Navbar: FC = () => {
  const router = useRouter()

  return (
    <nav>
      <ul className={styles.list_wrapper}>
        {navbarMenu.map((item) => (
          <li
            key={item.id}
            className={cls({
              [styles.active]: getActivePage(router.pathname) === item.id,
            })}
          >
            {item.isExternal ? (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
