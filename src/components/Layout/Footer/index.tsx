import { FC, memo } from 'react'
import styles from './index.module.scss'
import logoIcon from '@/src/assets/icons/logo.svg'
import logoNameIcon from '@/src/assets/icons/logo-name.svg'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/src/utils/constants/links'

const Footer: FC = () => {
	return (
		<article className={styles.footer_wrapper}>
			<footer>
				<div className={styles.block_links}>
					<div className={styles.logo}>
						<a href="/">
							<Image src={logoIcon} alt="blockless logo" width="24" />
						</a>
					</div>
					<div className="nx-flex nx-gap-10">
						{footerLinks.map((item, key) => (
							<div key={key} className={styles.link_columns}>
								<div className={styles.community}>
									<p className={styles.block_title}>Community</p>
									<ul>
										{item.children.map((nav, k) => (
											<li key={k} className={styles.link_item}>
												<Link href={nav.link} target={nav.isExternal ? '_blank' : '_self'}>
													{nav.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
				<p className={styles.block_copyright}>
					© {new Date().getFullYear()} TX Labs Foundation Ltd.
				</p>
			</footer>
		</article>
	)
}

export default Footer
