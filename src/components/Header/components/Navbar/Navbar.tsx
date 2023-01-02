import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cls from 'classnames';
import styles from './Navbar.module.scss';
import { getActivePage } from 'utils/helpers';
import { navbarMenu } from 'utils/constants/links';

const Navbar: FC = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={styles.list_wrapper}>
        {navbarMenu.map((item) => (
          <li
            key={item.id}
            className={cls({
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
    </nav>
  );
};

export default Navbar;
