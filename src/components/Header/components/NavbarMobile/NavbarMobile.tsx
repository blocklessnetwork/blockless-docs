import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavbarMobile.module.scss';
import cls from 'classnames';
import { Button } from 'components/Button';
import { DocsNavigation } from 'components/DocsNavigation';
import { getActivePage } from 'utils/helpers';
import { loginLink, navbarMenu } from 'utils/constants/links';

const NavbarMobile: FC = () => {
  const { pathname } = useLocation();

  const handleLogin = () => {
    window.location.replace(loginLink);
  };

  const isHelpPage = pathname === '/';

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list_wrapper}>
        {navbarMenu.map((item) => (
          <li
            key={item.id}
            className={cls(styles.menu_item, {
              [styles.active]: getActivePage(pathname) === item.id,
            })}
          >
            {item.isExternal ? (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
      {!isHelpPage && <DocsNavigation />}
      <div className={styles.login_wrapper}>
        <Button label="Login" handleClick={handleLogin} />
      </div>
    </nav>
  );
};

export default NavbarMobile;
