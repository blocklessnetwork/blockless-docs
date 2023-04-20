import { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss';
import cls from 'classnames';
import { Button } from '@/src/components/Button';
import DocsNavigation from '@/src/components/DocsLeftNav';
import { isActiveMenu } from '@/src/utils/helpers';
import { loginLink, navbarMenu } from '@/src/utils/constants/links';

const NavbarMobile: FC = () => {
  const router = useRouter()

  const isHelpPage = router.pathname === '/';

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list_wrapper}>
        {navbarMenu.map((item) => (
          <li
            key={item.name}
            className={cls(styles.menu_item, {
              [styles.active]: isActiveMenu(router.pathname, item.path),
            })}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {!isHelpPage && <DocsNavigation />}
      <div className={styles.login_wrapper}>
        <a className="login-button" href={loginLink} target="_blank" rel="noopener noreferrer">
          <Button label="Login" />
        </a>
      </div>
    </nav>
  );
};

export default NavbarMobile;
