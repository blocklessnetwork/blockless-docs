import { FC, useEffect, useState } from 'react';
import { Button } from '../Button';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from 'assets/icons/logo.svg';
import logoNameIcon from 'assets/icons/logo-name.svg';
import { Navbar } from './components/Navbar';
import DocSearch from 'components/DocSearch';
import { Menu } from './components/Menu';
import cls from 'classnames';
import { NavbarMobile } from './components/NavbarMobile';
import { loginLink } from 'utils/constants/links';

const Header: FC = () => {
  const { pathname } = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setShowSearch(pathname === '/' ? false : true);
  }, [pathname]);

  const handleLogin = () => {
    window.location.replace(loginLink);
  };

  return (
    <article className={styles.header_wrapper}>
      <div className={styles.header_logo_wrapper}>
        <header>
          <div className={styles.logo}>
            <Link to="/">
              <img
                src={logoIcon}
                width={28}
                height={30}
                alt="blockless logo"
                className={styles.logo_icon}
              />
            </Link>
            <Link to="/">
              <img
                src={logoNameIcon}
                alt="blockless"
                className={styles.logo_name}
              />
            </Link>
            <Link to="/">
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
          <Button label="Login" handleClick={handleLogin} />
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
