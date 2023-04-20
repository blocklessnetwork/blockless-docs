import { FC, useMemo, useState } from "react";
import styles from "./index.module.scss";
import cls from "classnames";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/src/assets/icons/arrow-down.svg";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/router";

import { docsMenu, menuItem } from "@/src/utils/constants/links";

const DocsLeftNav: FC = () => {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const selectHandle = (menu: menuItem) => {
    if (menu.path && !menu.subMenu) router.push(menu.path);
    setSelected(menu.name === selected ? '' : menu.name)
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
      {leftNav.map((item: menuItem) => (
        <li
          key={item.name}
          className={cls(styles.nav_item, {
            [styles.selected_nav]: 
              (!item.subMenu && selected === item.name) ||
              router.pathname === item.path,
          })}
        >
          <p
            className={styles.item_wrapper}
            onClick={() => selectHandle(item)}
          >
            {item.subMenu && (
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className={cls(styles.arrow, {
                  [styles.expanded]: selected === item.name,
                })}
              />
            )}
            <span>{item.name}</span>
          </p>
          <AnimateHeight height={selected === item.name ? "auto" : 0}>
            {item.subMenu && (
              <ul className={styles.inner_wrapper}>
                {item.subMenu?.map((el: menuItem) => (
                  <li
                    key={`${item.name}-${el.name}`}
                    className={cls(styles.inner_nav_item, {
                      [styles.selected]: router.pathname === el.path,
                    })}
                  >
                    <Link href={el.path as string}>{el.name}</Link>
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
