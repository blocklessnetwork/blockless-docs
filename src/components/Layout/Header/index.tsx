import { FC, useEffect, useState } from 'react'
import { Button } from '@/src/components/Button'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logoIcon from '@/src/assets/icons/logo.svg'
import logoNameIcon from '@/src/assets/icons/logo-name.svg'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import cls from 'classnames'
import NavbarMobile from './components/NavbarMobile'
import { loginLink } from '@/src/utils/constants/links'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'
import type { Item, PageItem } from 'nextra/normalize-pages'

interface headerProps {
  activeType: string | undefined;
  docsDirectories: PageItem[];
  directories: Item[];
}
const Header: FC<headerProps> = (props) => {
  const { activeType, docsDirectories, directories } = props;
	const config = useConfig()
	const router = useRouter()

	const [showSearch, setShowSearch] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(false)
		setShowSearch(router.pathname.startsWith("/docs/"))
	}, [router.pathname])

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'initial'
	}, [open])

	return (
		<article className={styles.header_wrapper}>
			<div className={styles.header_logo_wrapper}>
				<header>
					<div className={styles.logo}>
						<a href="/">
							<Image src={logoIcon} alt="blockless logo" className={styles.logo_icon} />
						</a>
						<a href="/">
							<Image src={logoNameIcon} alt="blockless" className={styles.logo_name} />
						</a>
						<Link href="/docs" className={styles.logo_docs}>
							<span className={styles.separator}>/</span>
							<span className={styles.support}>Docs</span>
						</Link>
					</div>
					<div className={styles.header_right}>
						<div className={styles.search_wrapper}>
							{!!showSearch && (
								<>
									{renderComponent(config.search.component, {
										directories: [],
										// className: 'nx-hidden md:nx-inline-block mx-min-w-[200px]',
                    resultClassName: "!nx-top-[calc(100%_+_8px)] max-md:nx-max-w-full"
									})}
								</>
							)}
						</div>
						<div className={styles.menu_wrapper}>
							<Menu checked={open} handleChangeMenu={() => setOpen(!open)} />
							<div
								className={cls(styles.menu_overlay, {
									[styles.overlay_active]: open
								})}
							>
								<NavbarMobile activeType={activeType} docsDirectories={docsDirectories} directories={directories} />
							</div>
						</div>
						<a
							className={styles.login_button}
							href={loginLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button label="Login" />
						</a>
					</div>
				</header>
			</div>
			<div className={styles.header_nav_wrapper}>
				<header>
					<Navbar />
				</header>
			</div>
		</article>
	)
}

export default Header
