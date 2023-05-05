export const isActiveMenu = (pathname: string, menuPath: string) => {
	const _menuPath =
		menuPath.split('/').length > 2 ? menuPath.split('/').slice(0, 2).join('/') : menuPath
	return pathname === _menuPath || (pathname.startsWith(_menuPath) && _menuPath !== '/')
}
