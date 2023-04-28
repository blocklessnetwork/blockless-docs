import { FC, useMemo, useState } from "react";
import styles from "./index.module.scss";
import cls from "classnames";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/src/assets/icons/arrow-down.svg";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/router";
import { docsMenu, menuItem } from "@/src/utils/constants/links";
import type { PageItem } from 'nextra/normalize-pages'

interface docsLeftNavProps {
	docsDirectories: PageItem[]
}
const DocsLeftNav: FC<docsLeftNavProps> = (props) => {
  const { docsDirectories } = props;
  const router = useRouter();
  // console.log('DocsLeftNav docsDirectories', docsDirectories)
  const [selected, setSelected] = useState("");

  const selectHandle = (menu: PageItem) => {
    if (menu.route && !menu.children) router.push(menu.route);
    setSelected(menu.route === selected ? '' : menu.route)
  };

  const leftNav = useMemo(() => {
    const currentMenu = docsMenu.find((v: menuItem)=>router.pathname.startsWith(v.path as string));
    if(!currentMenu) return [];
    const subMenu = currentMenu?.subMenu ? JSON.parse(JSON.stringify(currentMenu?.subMenu)) : [];
    subMenu.unshift({
      name: "Overview",
      path: currentMenu.path,
    })
    const leftNav = subMenu.map((v: menuItem)=>{
      if(v.path && v.subMenu && v.subMenu.length){
        v.subMenu.unshift({
          name: "Overview",
          path: v.path,
        })
      }
      return v;
    })

    return leftNav;
  }, [router.pathname]);

  return (
    <ul className={styles.doc_navigation}>
      {docsDirectories.filter(v=>v.isUnderCurrentDocsTree).map((item: PageItem) => (
        <li
          key={item.route}
          className={cls(styles.nav_item, {
            [styles.selected_nav]: selected === item.route
              // (!item.children && selected === item.name) ||
              // router.pathname === item.route,
          })}
        >
          <p
            className={styles.item_wrapper}
            onClick={() => selectHandle(item)}
          >
            {item.children && (
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className={cls(styles.arrow, {
                  [styles.expanded]: selected === item.route,
                })}
              />
            )}
            <span>{item.title}</span>
          </p>
          <AnimateHeight height={selected === item.route ? "auto" : 0}>
            {item.children && (
              <ul className={styles.inner_wrapper}>
                {item.children?.map((el: PageItem) => (
                  <li
                    key={el.route}
                    className={cls(styles.inner_nav_item, {
                      [styles.selected]: router.pathname === el.route,
                    })}
                  >
                    <Link href={el.route as string}>{el.title}</Link>
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
