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

interface navMobileProps {
	activeType: string | undefined
	docsDirectories: PageItem[]
	directories: Item[]
}
const NavbarMobile: FC<navMobileProps> = (props) => {
	const { activeType, docsDirectories, directories } = props
	const router = useRouter()

	return (
		<nav className={styles.navbar}>
      <ul className={styles.list_wrapper}>
        {directories.map((item) => {
          // @ts-ignore
          const path = item.href || item.route
          const isActive = isActiveMenu(router.pathname, path)
          return (
            <li
              key={item.name}
              className={cls(styles.menu_item, {
                [styles.active]: isActive
              })}
            >
              <Link href={path}>{item.title}</Link>
              <div className={styles.line} />
            </li>
          )
        })}
      </ul>
			{activeType !== 'page' && <DocsNavigation docsDirectories={docsDirectories} />}
			<div className={styles.login_wrapper}>
				<a className="login-button" href={loginLink} target="_blank" rel="noopener noreferrer">
					<Button label="Login" />
				</a>
			</div>
		</nav>
	)
}

export default NavbarMobile
