import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import logoIcon from 'assets/icons/logo.svg';
import logoNameIcon from 'assets/icons/logo-name.svg';
import { Link } from 'react-router-dom';
import { footerLinks } from 'utils/constants/links';

const Footer: FC = () => {
  return (
    <article className={styles.footer_wrapper}>
      <footer>
        <div className={styles.block_links}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logoIcon} width={32} height={35} alt="blockless logo" />
            </Link>
            <Link to="/">
              <img
                src={logoNameIcon}
                alt="blockless"
                className={styles.logo_name}
              />
            </Link>
          </div>
          <div className={styles.link_columns}>
            <div className={styles.resources}>
              <p className={styles.block_title}>Resources</p>
              <ul>
                {footerLinks.resources.map((item) => (
                  <li key={item.id} className={styles.link_item}>
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
            </div>
            <div className={styles.community}>
              <p className={styles.block_title}>Community</p>
              <ul>
                {footerLinks.community.map((item) => (
                  <li key={item.id} className={styles.link_item}>
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
            </div>
            <div className={styles.company}>
              <p className={styles.block_title}>Company</p>
              <ul>
                {footerLinks.company.map((item) => (
                  <li key={item.id} className={styles.link_item}>
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
            </div>
          </div>
        </div>
        <p className={styles.block_copyright}>
          Copyright © {new Date().getFullYear()} TX Labs, Inc. All rights reserved.
        </p>
      </footer>
    </article>
  );
};

export default memo(Footer);
