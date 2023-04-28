export const isActiveMenu = (pathname: string, menuPath: string) => {
	return (
		pathname === menuPath ||
		(pathname.startsWith(menuPath) && menuPath !== '/docs') ||
		(pathname === '/' && menuPath === '/docs')
	)
}
