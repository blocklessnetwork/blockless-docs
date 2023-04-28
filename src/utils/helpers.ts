import { conceptArticles, conceptsRoutes } from './constants/concepts'
import { docsArticles, docsRoutes } from './constants/documentstion'
import { referenceArticles, referenceRoutes } from './constants/reference'

export const getInitialExpanded = (pathname: string) => {
	let currentArticles = docsArticles
	if (Object.values(conceptsRoutes).some((item) => item === pathname))
		currentArticles = conceptArticles
	if (Object.values(referenceRoutes).some((item) => item === pathname))
		currentArticles = referenceArticles
	const selected = currentArticles?.find(
		(item: any) =>
			item?.innerArticles && item.innerArticles.some((el: any) => el.route === pathname)
	)
	return selected?.id || ''
}

export const getActivePage = (pathname: string) => {
	if (Object.values(docsRoutes).some((item) => item === pathname)) return 'documentation'
	if (Object.values(conceptsRoutes).some((item) => item === pathname)) return 'concepts'
	if (Object.values(referenceRoutes).some((item) => item === pathname)) return 'reference'
	return 'help'
}

export const isActiveMenu = (pathname: string, menuPath: string) => {
	return (
		pathname === menuPath ||
		(pathname.startsWith(menuPath) && menuPath !== '/docs') ||
		(pathname === '/' && menuPath === '/docs')
	)
}
