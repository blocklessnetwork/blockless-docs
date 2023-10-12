import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import cls from 'classnames'
import { Button } from '@/src/components/Button'
import DocsNavigation from '@/src/components/DocsLeftNav'
import { isActiveMenu } from '@/src/utils/helpers'
import { loginLink } from '@/src/utils/constants/links'
import type { Item, PageItem } from 'nextra/normalize-pages'
import Navbar from '../Navbar'

interface navMobileProps {
	activeType: string | undefined
	docsDirectories: PageItem[]
	directories: Item[]
	showSubNav: boolean
}
const NavbarMobile: FC<navMobileProps> = (props) => {
	const { activeType, docsDirectories, directories, showSubNav } = props
	const router = useRouter()

	return (
		<nav className={styles.navbar}>
			<div className={cls(styles.header_nav_wrapper, showSubNav ? 'nx-hidden' : 'nx-flex')}>
				<Navbar directories={directories} />
			</div>

			{activeType !== 'page' && <DocsNavigation docsDirectories={docsDirectories} />}
			{/* <div className={styles.login_wrapper}>
				<a className="login-button" href={loginLink} target="_blank" rel="noopener noreferrer">
					<Button label="Dashboard" />
				</a>
			</div> */}
		</nav>
	)
}

export default NavbarMobile
