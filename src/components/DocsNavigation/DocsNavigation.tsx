import { FC, useMemo, useState } from 'react';
import styles from './DocsNavigation.module.scss';
import cls from 'classnames';
import arrowIcon from 'assets/icons/arrow-down.svg';
import AnimateHeight from 'react-animate-height';
import { useLocation, useNavigate } from 'react-router-dom';
import { getInitialExpanded } from 'utils/helpers';
import { docsArticles, docsRoutes } from 'utils/constants/documentstion';
import { conceptArticles, conceptsRoutes } from 'utils/constants/concepts';
import { referenceArticles, referenceRoutes } from 'utils/constants/reference';

const DocsNavigation: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState<string>(
    getInitialExpanded(pathname)
  );

  const handleChangeExpanded = (menu: { id: string; innerArticles: {route?: string}[] | null, route?: string }) => {
    if (menu.route) navigate(menu.route);
    if (menu.innerArticles && menu.innerArticles[0].route) navigate(menu.innerArticles[0].route);
    if (expanded === menu.id) setExpanded('');
    if (expanded !== menu.id) setExpanded(menu.id);
  };

  const currentArticles = useMemo(() => {
    if (Object.values(docsRoutes).some((item) => item === pathname))
      return docsArticles;
    if (Object.values(conceptsRoutes).some((item) => item === pathname))
      return conceptArticles;
    if (Object.values(referenceRoutes).some((item) => item === pathname))
      return referenceArticles;
    return docsArticles;
  }, [pathname]);

  return (
    <ul className={styles.doc_navigation}>
      {currentArticles.map((item) => (
        <li
          key={item.id}
          className={cls(styles.nav_item, {
            [styles.selected_nav]:
              (!item.innerArticles && expanded?.includes(item.id)) ||
              pathname === item.route,
          })}
        >
          <p
            className={styles.item_wrapper}
            onClick={() => handleChangeExpanded(item)}
          >
            {item.innerArticles && (
              <img
                src={arrowIcon}
                alt="arrow icon"
                className={cls(styles.arrow, {
                  [styles.expanded]: expanded?.includes(item.id),
                })}
              />
            )}
            <span>{item.label}</span>
          </p>
          <AnimateHeight height={expanded?.includes(item.id) ? 'auto' : 0}>
            {item.innerArticles && (
              <ul className={styles.inner_wrapper}>
                {item.innerArticles?.map((el) => (
                  <li
                    key={el.id}
                    className={cls(styles.inner_nav_item, {
                      [styles.selected]: pathname === el.route,
                    })}
                    onClick={() => {
                      navigate(el.route);
                    }}
                  >
                    {el.label}
                  </li>
                ))}
              </ul>
            )}
          </AnimateHeight>
        </li>
      ))}
    </ul>
  );
};

export default DocsNavigation;
