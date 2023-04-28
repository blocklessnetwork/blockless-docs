import { FC, useState } from 'react'
import styles from './index.module.scss'
import cls from 'classnames'
import Image from 'next/image'
import arrowIcon from '@/src/assets/icons/arrow-down.svg'
import AnimateHeight from 'react-animate-height'
import { useRouter } from 'next/router'
import type { PageItem } from 'nextra/normalize-pages'

interface docsLeftNavProps {
	docsDirectories: PageItem[]
}
const DocsLeftNav: FC<docsLeftNavProps> = (props) => {
	const { docsDirectories } = props
	const router = useRouter()
	const [selected, setSelected] = useState('')

	const selectHandle = (menu: PageItem) => {
		if (menu.route && !menu.children) router.push(menu.route)
		setSelected(menu.route === selected ? '' : menu.route)
	}

	return (
		<ul className={styles.doc_navigation}>
			{docsDirectories
				.filter((v) => v.isUnderCurrentDocsTree)
				.map((item: PageItem) => (
					<li
						key={item.route}
						className={cls(styles.nav_item, {
							[styles.selected_nav]: selected === item.route
						})}
					>
						<p className={styles.item_wrapper} onClick={() => selectHandle(item)}>
							{item.children && (
								<Image
									src={arrowIcon}
									alt="arrow icon"
									className={cls(styles.arrow, {
										[styles.expanded]: selected === item.route
									})}
								/>
							)}
							<span>{item.title}</span>
						</p>
						{item.children && <NavList list={item.children} isOpen={selected === item.route} />}
					</li>
				))}
		</ul>
	)
}

interface navListProps {
	list: PageItem[]
	isOpen: boolean
}
const NavList: FC<navListProps> = (props) => {
	const { list, isOpen } = props
	const router = useRouter()
  const [selected, setSelected] = useState('')

  const selectHandle = (menu: PageItem) => {
		if (menu.route && !menu.children) router.push(menu.route)
		setSelected(menu.route === selected ? '' : menu.route)
	}

	return (
		<AnimateHeight height={isOpen ? 'auto' : 0}>
			<ul className={styles.inner_wrapper}>
				{list.map((item: PageItem) => (
					<li
						key={item.route}
						className={cls(styles.inner_nav_item, {
							[styles.selected]: router.pathname === item.route
						})}
					>
						<p onClick={() => selectHandle(item)}>
							<span>{item.title}</span>
							{item.children && (
								<Image
									src={arrowIcon}
									alt="arrow icon"
									className={cls(styles.arrow, {
										[styles.expanded]: selected === item.route
									})}
								/>
							)}
						</p>
            {item.children && <NavList list={item.children} isOpen={selected === item.route} />}
					</li>
				))}
			</ul>
		</AnimateHeight>
	)
}

export default DocsLeftNav
