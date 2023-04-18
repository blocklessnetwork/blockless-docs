import { FC, useEffect, useState } from 'react';
import { Button } from '@/src/components/Button';
import styles from './index.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logoIcon from '@/src/assets/icons/logo.svg';
import logoNameIcon from '@/src/assets/icons/logo-name.svg';
import Navbar from './components/Navbar';
import DocSearch from '@/src/components/DocSearch';
import Menu from './components/Menu';
import cls from 'classnames';
import NavbarMobile from './components/NavbarMobile';
import { loginLink } from '@/src/utils/constants/links';

const Header: FC = () => {
  const router = useRouter();

  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setShowSearch(router.pathname === '/' ? false : true);
  }, [router.pathname]);

  return (
    <article className={styles.header_wrapper}>
      <div className={styles.header_logo_wrapper}>
        <header>
          <div className={styles.logo}>
            <Link href="/docs">
              <Image
                src={logoIcon}
                alt="blockless logo"
                className={styles.logo_icon}
              />
            </Link>
            <Link href="/docs">
              <Image
                src={logoNameIcon}
                alt="blockless"
                className={styles.logo_name}
              />
            </Link>
            <Link href="/docs">
              <span className={styles.separator}>/</span>
              <span className={styles.support}>Support</span>
            </Link>
          </div>
          <div className={styles.search_wrapper}>
            {!!showSearch && (
              <DocSearch />
            )}
          </div>
          <div className={styles.menu_wrapper}>
            <Menu checked={open} handleChangeMenu={() => setOpen(!open)} />
            <div
              className={cls(styles.menu_overlay, {
                [styles.overlay_active]: open,
              })}
            >
              <NavbarMobile />
            </div>
          </div>
          <a className={styles.login_button} href={loginLink} target="_blank" rel="noopener noreferrer">
            <Button label="Login" />
          </a>
        </header>
      </div>
      <div className={styles.header_nav_wrapper}>
        <header>
          <Navbar />
          {!!showSearch && (
            <div className={styles.nav_search_wrapper}>
              <DocSearch />
            </div>
          )}
        </header>
      </div>
    </article>
  );
};

export default Header;
