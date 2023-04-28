import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cls from 'classnames'
import styles from './index.module.scss'
import { isActiveMenu } from '@/src/utils/helpers'
import type { Item } from 'nextra/normalize-pages'

interface NavbarProps {
	directories: Item[]
}
const Navbar: FC<NavbarProps> = (props) => {
	const { directories } = props
	const router = useRouter()

	return (
		<nav>
			<ul className={styles.list_wrapper}>
				{directories.map((item: any) => {
           // @ts-ignore
          const path = item.href || item.route;
					return (
						<li
							key={item.name}
							className={cls({
								[styles.active]: isActiveMenu(router.pathname, path)
							})}
						>
							<Link href={path}>{item.title}</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navbar
