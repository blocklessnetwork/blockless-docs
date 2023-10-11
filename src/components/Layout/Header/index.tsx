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
import cls from 'classnames'
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

	const [showSearch, setShowSearch] = useState(false)
	const [isHome, setIsHome] = useState(true)
	const [open, setOpen] = useState(false)

	const { scrollY } = useScroll()

	const [showSubNav, setShowSubNav] = useState(true)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (showSubNav) {
			setShowSubNav(latest > 64 ? false : true)
		} else {
			setShowSubNav(latest > 64 - 52 ? false : true)
		}
	})

	useEffect(() => {
		setOpen(false)
		setIsHome(router.pathname === '/')
	}, [router.pathname])

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'initial'
	}, [open])

	return (
		<article className={styles.header_wrapper}>
			<div className={styles.header_logo_wrapper}>
				<header className="nx-gap-4 nx-h-full">
					<div className="nx-flex">
						<div className={styles.logo}>
							<a href="/">
								<Image
									width="22"
									src={logoIcon}
									alt="blockless logo"
									className={styles.logo_icon}
								/>
							</a>
							<motion.div
								className="nx-flex nx-items-center"
								animate={{
									width: showSearch ? '0' : 'auto',
									overflow: showSearch ? 'hidden' : 'initial',
									transition: { duration: 0.3, ease: 'linear' }
								}}
							>
								<a
									href="/"
									className={classNames(
										'nx-ml-2 nx-text-xl nx-text-foreground nx-font-medium nx-block',
										!showSubNav && 'md:nx-hidden'
									)}
								>
									Blockless
								</a>

								<Link
									href="/"
									className={classNames(
										'nx-ml-2 nx-text-xl/[20px] nx-h-5 nx-font-medium nx-tracking-tight nx-text-mutedForeground',
										!showSubNav && 'md:nx-text-foreground'
									)}
								>
									Docs
								</Link>
							</motion.div>
						</div>
						<div className={classNames('nx-ml-6 nx-hidden', !showSubNav && 'md:nx-block')}>
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

						<div className={classNames(styles.header_right, 'nx-flex nx-block md:nx-hidden')}>
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
										className={cls(
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
			<div className={classNames(styles.header_nav_wrapper, showSubNav ? 'nx-flex' : 'nx-hidden')}>
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
			</div>
		</article>
	)
}

export default Header
