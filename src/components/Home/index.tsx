import { FC } from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { communityLinks, documentationIndexList } from '@/src/utils/constants/links'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'

const communityKeys = ['github', 'discord', 'telegram']
const communityList = communityLinks
	.filter((item) => communityKeys.includes(item.id))
	.sort((a, b) => {
		return communityKeys.findIndex((v) => v === a.id) < communityKeys.findIndex((v) => v === b.id)
			? -1
			: 1
	})

const Home: FC = () => {
	const router = useRouter()
  const config = useConfig()

	const handleChangeDocumentation = (link: string | null) => {
		if (!link) return
		router.push(link)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.help_header}>
				<h2 className={styles.title}>How can we help?</h2>
				<p className={styles.subtitle}>
					Discover solutions in our <strong>documentation</strong> and <strong>community</strong>
				</p>
				<div className={styles.search_box}>
					{renderComponent(config.search.component, {
						directories: [],
						className: 'md:nx-w-full nx-w-full nx-h-full nx-border nx-border-solid nx-border-[#d0d5df] nx-rounded-[8px]',
            inputClassName: "nx-bg-white",
            resultClassName: "!nx-max-w-full !nx-top-[calc(100%_+_8px)]"
					})}
				</div>
			</div>

			<h3 className={styles.documentations_title}>Browse documentation by product</h3>
			<div className={styles.documentations_wrapper}>
				{documentationIndexList.map((item) => (
					<div
						className={styles.item}
						key={item.id}
						onClick={() => handleChangeDocumentation(item.link)}
					>
						<div className={styles.icon_box}>
							<Image src={item.icon} alt="" />
						</div>
						<div className={styles.text_box}>
							<p className={styles.item_title}>{item.title}</p>
							<p className={styles.item_desc}>{item.desc}</p>
						</div>
					</div>
				))}
			</div>

			<h3 className={styles.community_title}>Get your questions answered in our communities.</h3>
			<div className={styles.communities_wrapper}>
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
	)
}

export default Home
