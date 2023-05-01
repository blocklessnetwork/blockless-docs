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
		<ul className={styles.list_wrapper}>
			{directories.map((item: any) => {
				// @ts-ignore
				const path = item.href || item.route
        const isActive = isActiveMenu(router.pathname, path)
				return (
					<li
						key={item.name}
						className={cls({
							[styles.active]: isActive
						})}
					>
						<Link href={path}>{item.title}</Link>
            <div className={styles.line} />
					</li>
				)
			})}
		</ul>
	)
}

export default Navbar
