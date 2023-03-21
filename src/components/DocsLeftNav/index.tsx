import { FC, useMemo, useState } from "react";
import styles from "./index.module.scss";
import cls from "classnames";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/src/assets/icons/arrow-down.svg";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/router";
import { getInitialExpanded } from "@/src/utils/helpers";
import { docsArticles, docsRoutes } from "@/src/utils/constants/documentstion";
import {
  conceptArticles,
  conceptsRoutes,
} from "@/src/utils/constants/concepts";
import {
  referenceArticles,
  referenceRoutes,
} from "@/src/utils/constants/reference";

const DocsLeftNav: FC = () => {
  const router = useRouter();

  const [expanded, setExpanded] = useState<string>(
    getInitialExpanded(router.pathname)
  );

  const handleChangeExpanded = (menu: {
    id: string;
    innerArticles: { route?: string }[] | null;
    route?: string;
  }) => {
    if (menu.route && !menu.innerArticles) router.push(menu.route);
    // if (menu.innerArticles && menu.innerArticles[0].route) router.push(menu.innerArticles[0].route);
    if (expanded === menu.id) setExpanded("");
    if (expanded !== menu.id) setExpanded(menu.id);
  };

  const currentArticles = useMemo(() => {
    if (Object.values(docsRoutes).some((item) => item === router.pathname))
      return docsArticles;
    if (Object.values(conceptsRoutes).some((item) => item === router.pathname))
      return conceptArticles;
    if (Object.values(referenceRoutes).some((item) => item === router.pathname))
      return referenceArticles;
    return docsArticles;
  }, [router.pathname]);

  return (
    <ul className={styles.doc_navigation}>
      {currentArticles.map((item) => (
        <li
          key={item.id}
          className={cls(styles.nav_item, {
            [styles.selected_nav]:
              (!item.innerArticles && expanded?.includes(item.id)) ||
              router.pathname === item.route,
          })}
        >
          <p
            className={styles.item_wrapper}
            onClick={() => handleChangeExpanded(item)}
          >
            {item.innerArticles && (
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className={cls(styles.arrow, {
                  [styles.expanded]: expanded?.includes(item.id),
                })}
              />
            )}
            <span>{item.label}</span>
          </p>
          <AnimateHeight height={expanded?.includes(item.id) ? "auto" : 0}>
            {item.innerArticles && (
              <ul className={styles.inner_wrapper}>
                {item.innerArticles?.map((el) => (
                  <li
                    key={el.id}
                    className={cls(styles.inner_nav_item, {
                      [styles.selected]: router.pathname === el.route,
                    })}
                  >
                    <Link href={el.route}>{el.label}</Link>
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

export default DocsLeftNav;
