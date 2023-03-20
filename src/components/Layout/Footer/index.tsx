import { FC, memo } from 'react';
import styles from './index.module.scss';
import logoIcon from '@/src/assets/icons/logo.svg';
import logoNameIcon from '@/src/assets/icons/logo-name.svg';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/src/utils/constants/links';

const Footer: FC = () => {
  return (
    <article className={styles.footer_wrapper}>
      <footer>
        <div className={styles.block_links}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoIcon} alt="blockless logo" />
            </Link>
            <Link href="/">
              <Image
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
                      <Link href={item.path}>{item.label}</Link>
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
                      <Link href={item.path}>{item.label}</Link>
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
                      <Link href={item.path}>{item.label}</Link>
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
