import { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logoIcon from '@/src/assets/icons/logo.svg'
import searchIcon from '@/src/assets/icons/search.svg'
import menuIcon from '@/src/assets/icons/menu.svg'
import closeIcon from '@/src/assets/icons/close.svg'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'
import type { Item, PageItem } from 'nextra/normalize-pages'
import classNames from 'classnames'
import { useScroll, useMotionValueEvent, motion } from 'framer-motion'

interface headerProps {
	activeType: string | undefined
	docsDirectories: PageItem[]
	directories: Item[]
}
const Header: FC<headerProps> = (props) => {
	const { activeType, docsDirectories, directories } = props
	const config = useConfig()
	const router = useRouter()
	const [isHome, setIsHome] = useState(true)
	const [showSubNav, setShowSubNav] = useState(true)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (showSubNav) {
			setShowSubNav(latest > 64 ? false : true)
		} else {
			setShowSubNav(latest > 64 - 52 ? false : true)
		}
	})

	useEffect(() => {
		setIsHome(router.pathname === '/')
	}, [router.pathname])

	return (
		<article className={styles.header_wrapper}>
			<Desktop showSubNav={showSubNav} directories={directories} isHome={isHome} />
			<Mobile
				showSubNav={showSubNav}
				directories={directories}
				isHome={isHome}
				activeType={activeType}
				docsDirectories={docsDirectories}
			/>
			<motion.div
				className={classNames(styles.header_nav_wrapper, 'nx-flex nx-h-[52px]')}
				animate={{
					height: showSubNav ? '52px' : 0,
					opacity: showSubNav ? 1 : 0,
					transition: { duration: 0.1, ease: 'linear', after: 'nx-hidden' }
				}}
			>
				<header>
					<Navbar directories={directories} />
					{!isHome &&
						renderComponent(config.search.component, {
							directories: [],
							className:
								'nx-border nx-border-solid nx-border-border nx-rounded-[6px] nx-hidden md:nx-block',
							inputClassName: 'nx-bg-white nx-py-2.5',
							resultClassName:
								'!nx-top-[calc(100%_+_8px)] max-md:nx-max-w-full !nx-bg-white !nx-backdrop-filter-none'
						})}
				</header>
			</motion.div>
		</article>
	)
}

interface TopNavProps {
	showSubNav: boolean
	directories: Item[]
	isHome: boolean
	activeType?: string | undefined
	docsDirectories?: PageItem[]
}
const Desktop = (props: TopNavProps) => {
	const { showSubNav, directories, isHome } = props
	const config = useConfig()

	return (
		<div className={classNames(styles.header_logo_wrapper, 'nx-hidden md:nx-flex')}>
			<header className="nx-gap-4 nx-h-full">
				<div className="nx-flex">
					<div className={styles.logo}>
						<a href="/">
							<Image width="22" src={logoIcon} alt="blockless logo" className={styles.logo_icon} />
						</a>
						<div className="nx-flex nx-items-center">
							<motion.div
								className="nx-flex nx-items-center"
								animate={{
									width: showSubNav ? 'auto' : '0',
									overflow: showSubNav ? 'initial' : 'hidden',
									opacity: showSubNav ? 1 : 0,
									transition: { duration: 0.2, ease: 'linear' }
								}}
							>
								<a
									href="/"
									className={classNames('nx-ml-2 nx-text-xl nx-text-foreground nx-font-medium ')}
								>
									Blockless
								</a>
							</motion.div>
							<Link
								href="/"
								className={classNames(
									'nx-ml-2 nx-text-xl/[20px] nx-h-5 nx-font-medium nx-tracking-tight',
									showSubNav ? 'nx-text-mutedForeground' : 'md:nx-text-foreground'
								)}
							>
								Docs
							</Link>
						</div>
					</div>
					<div className={classNames('nx-ml-6', showSubNav ? 'nx-hidden' : 'nx-block')}>
						<Navbar directories={directories} />
					</div>
				</div>
				<div className="nx-flex nx-grow nx-justify-end nx-h-full nx-items-center">
					{!isHome && !showSubNav && (
						<div className="nx-ml-6 nx-hidden md:nx-block">
							{renderComponent(config.search.component, {
								directories: [],
								className: 'nx-border nx-border-solid nx-border-border nx-rounded-[6px]',
								inputClassName: 'nx-bg-white nx-py-2.5',
								resultClassName:
									'!nx-top-[calc(100%_+_8px)] max-md:nx-max-w-full !nx-bg-white !nx-backdrop-filter-none'
							})}
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

const Mobile = (props: TopNavProps) => {
	const { showSubNav, directories, isHome, activeType, docsDirectories = [] } = props
	const [showSearch, setShowSearch] = useState(false)
	const config = useConfig()
	const router = useRouter()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'initial'
	}, [open])

	useEffect(() => {
		setOpen(false)
	}, [router.pathname])

	return (
		<div className={classNames(styles.header_logo_wrapper, 'nx-flex md:nx-hidden')}>
			<header className="nx-gap-4 nx-h-full">
				<div className="nx-flex">
					<div className={styles.logo}>
						<a href="/">
							<Image width="22" src={logoIcon} alt="blockless logo" className={styles.logo_icon} />
						</a>
						<motion.div
							className="nx-flex nx-items-center"
							animate={{
								width: showSearch ? '0' : 'auto',
								overflow: showSearch ? 'hidden' : 'initial',
								opacity: showSearch ? 0 : 1,
								transition: { duration: 0.2, ease: 'linear' }
							}}
						>
							<a
								href="/"
								className={classNames(
									'nx-ml-2 nx-text-xl nx-text-foreground nx-font-medium nx-block'
								)}
							>
								Blockless
							</a>

							<Link
								href="/"
								className={classNames(
									'nx-ml-2 nx-text-xl/[20px] nx-h-5 nx-font-medium nx-tracking-tight nx-text-mutedForeground'
								)}
							>
								Docs
							</Link>
						</motion.div>
					</div>
				</div>
				<div className="nx-flex nx-grow nx-justify-end nx-h-full nx-items-center">
					<div className={classNames(styles.header_right, 'nx-flex')}>
						<motion.div
							className="nx-flex nx-items-center nx-h-full nx-overflow-hidden nx-w-0"
							animate={{
								width: showSearch ? '100%' : 0,
								overflow: showSearch ? 'initial' : 'hidden',
								transition: { duration: 0.3, ease: 'linear' }
							}}
						>
							{renderComponent(config.search.component, {
								directories: [],
								className: 'nx-border nx-border-solid nx-border-border nx-rounded-[6px] nx-grow',
								inputClassName: 'nx-bg-white ',
								resultClassName:
									'!nx-top-[calc(100%_+_8px)] max-md:nx-max-w-full !nx-bg-white !nx-backdrop-filter-none'
							})}
						</motion.div>
						<div
							className="nx-p-1.5 nx-border nx-border-border nx-rounded-full nx-flex-shrink-0"
							onClick={() => setShowSearch(!showSearch)}
						>
							<Image src={searchIcon} width="16" alt="" />
						</div>
						{!isHome && (
							<>
								<div
									className="nx-p-1.5 nx-border nx-border-border nx-rounded-full nx-flex-shrink-0"
									onClick={() => setOpen(!open)}
								>
									<Image src={open ? closeIcon : menuIcon} width="16" alt="" />
								</div>
								<div
									className={classNames(
										'nx-flex nx-fixed nx-bottom-0 nx-left-0 nx-right-0',
										'nx-z-10 nx-bg-white nx-overflow-hidden nx-ml-auto nx-transition-[width] nx-duration-300',
										open ? 'nx-w-screen' : 'nx-w-0',
										showSubNav
											? 'nx-h-[calc(100vh_-_66px_-_52px)] nx-t-[calc(66px_+_52px)]'
											: 'nx-h-[calc(100vh_-_66px)] nx-t-[66px]'
									)}
								>
									<NavbarMobile
										activeType={activeType}
										docsDirectories={docsDirectories}
										directories={directories}
										showSubNav={showSubNav}
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
