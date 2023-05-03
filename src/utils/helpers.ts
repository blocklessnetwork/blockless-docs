export const isActiveMenu = (pathname: string, menuPath: string) => {
  const _menuPath = menuPath.split("/").length > 3 ? menuPath.split("/").slice(0,3).join("/") : menuPath
	return (
		pathname === _menuPath ||
		(pathname.startsWith(_menuPath) && _menuPath !== '/docs') ||
		(pathname === '/' && _menuPath === '/docs')
	)
}
