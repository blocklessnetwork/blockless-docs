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
		<ul className={cls(styles.list_wrapper,'nx-overflow-x-scroll scrollbar-hidden')}>
			{directories.map((item: any) => {
				// @ts-ignore
				const path = item.href || item.route
        const isActive = isActiveMenu(router.pathname, path)
				return (
					<li
						key={item.name}
						className={cls('nx-whitespace-nowrap',{
							[styles.active]: isActive
						})}
					>
						<Link href={path}>{item.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Navbar
