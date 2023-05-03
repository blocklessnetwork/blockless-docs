import React, { useMemo } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './index.module.scss'
import type { PageOpts } from 'nextra'
import { normalizePages } from 'nextra/normalize-pages'
import { useRouter } from 'next/router'
import { DEFAULT_LOCALE } from '@/nextra-theme-docs/src/constants'
import { useFSRoute } from 'nextra/hooks'

interface PropsTypes {
	children: React.ReactNode
	pageOpts: PageOpts
}

const Layout: React.FC<PropsTypes> = (props) => {
	const { children, pageOpts } = props
	const { pageMap } = pageOpts
	const { locale = DEFAULT_LOCALE, defaultLocale } = useRouter()
	const fsPath = useFSRoute()
  console.log("pageMap",pageMap)
	const { activeType, docsDirectories, directories } = useMemo(
		() =>
			normalizePages({
				list: pageMap,
				locale,
				defaultLocale,
				route: fsPath
			}),
		[pageMap, locale, defaultLocale, fsPath]
	)
	
	return (
		<div>
			<Header activeType={activeType} docsDirectories={docsDirectories} directories={directories} />
			<main className={styles.container}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
