import { FC } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import classname from 'classnames'
import { communityLinks } from '@/src/utils/constants/links'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'
import referencesBlockIcon from '@/src/assets/imgs/home/references_block.svg'

const communityKeys = ['github', 'discord', 'telegram']
const communityList = communityLinks
	.filter((item) => communityKeys.includes(item.id))
	.sort((a, b) => {
		return communityKeys.findIndex((v) => v === a.id) < communityKeys.findIndex((v) => v === b.id)
			? -1
			: 1
	})

const Home: FC = () => {
	const config = useConfig()

	return (
		<div className={styles.wrapper}>
			<div className={styles.help_header}>
				<h2 className={styles.title}>How can we help?</h2>
				<p className={styles.subtitle}>
					Discover solutions in our <strong>documentation</strong> and <strong>community</strong>
				</p>
				<div className={styles.search_box}>
					<div className={styles.search_bg} />
					{renderComponent(config.search.component, {
						directories: [],
						className:
							'md:nx-w-full nx-w-full nx-h-full nx-border nx-border-solid nx-border-[#d0d5df] nx-rounded-[8px]',
						inputClassName: 'nx-bg-white',
						resultClassName: '!nx-max-w-full !nx-top-[calc(100%_+_8px)]'
					})}
				</div>
			</div>

			<div className={styles.product_wrapper}>
				<div className={styles.row}>
					<Link href="/protocol" className={classname(styles.product_item, styles.protocol)}>
						<div className={styles.title}>Protocol</div>
						<div className={styles.desc}>
							Discover the next generation decentralized network optimized for verifiable
							computation
						</div>
					</Link>
					<Link href="/functions" className={classname(styles.product_item, styles.functions)}>
						<div className={styles.title}>Functions</div>
						<div className={styles.desc}>
							Get started and deploy your first application on Blockless
						</div>
					</Link>
				</div>
				<div className={styles.row}>
					<Link
						href="/developer-tools"
						className={classname(styles.product_item, styles.developer)}
					>
						<div className={styles.title}>Developer Tools</div>
						<div className={styles.desc}>
							Learn how to use the Blockless Dashboard, CLI, and SDKs to help you build, test, and
							manage your Blockless applications
						</div>
					</Link>
					<Link
						href="/reference/networking"
						className={classname(styles.product_item, styles.references)}
					>
						<div className={styles.title}>References</div>
						<div className={styles.desc}>Look up references for CLI or extension integrations</div>
						<Image className={styles.block_icon} src={referencesBlockIcon} alt="icon" />
					</Link>
				</div>
			</div>

			<div className={styles.communities_wrapper}>
				<div className={styles.title}>Get your questions answered in our communities</div>
				<div className={styles.community_list}>
					{communityList.map((item) => (
						<a key={item.id} href={item.path} target="_blank" rel="noreferrer">
							<div className={styles.community_item}>
								<Image className={styles.icon} src={item.icon} alt="icon" />
								<div className={styles.name}>Go to {item.label}</div>
								<i className={styles.link_icon} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
