import { FC } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import classname from 'classnames'
import { communitiesList, homeNavList } from '@/src/utils/constants/links'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'
import helpIcon from '@/src/assets/imgs/home/help.svg'

const Home: FC = () => {
	const config = useConfig()

	return (
		<div className="md:nx-pt-[48px]">
			<div className="nx-flex nx-justify-between nx-gap-[120px] nx-border-b nx-border-border">
				<div className="nx-grow nx-pt-[48px] nx-pb-[72px] max-md:nx-py-[36px]">
					<p className="nx-text-4xl/[44px] nx-font-medium nx-text-foreground">How can we help?</p>
					<p className="nx-mt-4 nx-text-xl/[28px] nx-text-mutedForeground">
						Discover solutions in our{' '}
						<em className="nx-text-foreground nx-not-italic">documentation</em> and{' '}
						<em className="nx-text-foreground nx-not-italic">communities</em>.
					</p>
					{renderComponent(config.search.component, {
						directories: [],
						className:
							'md:nx-w-full nx-w-full nx-h-[40px] nx-border nx-border-solid nx-border-border nx-rounded-[6px] md:nx-mt-[48px] nx-mt-[24px]',
						inputClassName: 'nx-bg-white',
						resultClassName: '!nx-max-w-full !nx-top-[calc(100%_+_8px)]'
					})}
				</div>
				<div className="nx-self-end max-md:nx-hidden">
					<Image src={helpIcon} width="360" alt="help" />
				</div>
			</div>
			<div className="md:nx-my-[48px] nx-my-[36px] md:nx-pt-[48px] md:nx-pb-[72px] nx-pt-0 nx-pb-0  nx-grid md:nx-grid-cols-3 nx-grid-cols-1 nx-gap-12">
				{homeNavList.map((item, key) => (
					<div key={key}>
						<Link href={item.link}>
							<div className="nx-flex nx-gap-2 nx-text-xl/[1.4em] nx-font-semibold">
								<Image src={item.icon} width="28" alt="" />
								<p className="nx-text-foreground">{item.label}</p>
								<p className="nx-text-mutedForeground">→</p>
							</div>
						</Link>
						<p className="nx-mt-3 nx-text-mutedForeground nx-text-sm/[1.7em]">{item.description}</p>
						<div className="nx-mt-3 nx-flex nx-flex-col nx-gap-3">
							{item.links.map((nav, k) => (
								<Link href={nav.link}>
									<p
										key={k}
										className="md:nx-text-mutedForeground nx-text-foreground  nx-text-sm/[1.7em] md:nx-text-left nx-text-center nx-font-medium md:nx-underline nx-no-underline nx-underline-offset-[3px] nx-border md:nx-border-none nx-border-border nx-py-2 md:nx-py-0 nx-rounded-md md:nx-rounded-none"
									>
										{nav.label}
									</p>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="md:nx-py-[72px] nx-py-[36px] nx-px-[16px] nx-bg-muted nx-w-screen nx-relative nx-left-1/2 nx--translate-x-2/4 nx-flex nx-flex-col nx-items-center">
				<p className="nx-text-foreground nx-text-lg/[28px] nx-font-semibold">
					Get your questions answered in our communities.
				</p>
				<div className='nx-flex nx-mt-6 nx-mb-6 md:nx-mb-0 nx-gap-6 md:nx-flex-row nx-flex-col nx-w-full md:nx-w-fit'>
					{communitiesList.map((item, key) => (
						<Link key={key} href={item.link} target='_blank'>
							<div className='nx-flex nx-bg-white nx-border nx-border-border nx-rounded-[6px] nx-py-2 nx-px-4 nx-gap-2 nx-justify-center'>
								<Image src={item.icon} width="16" className='nx-shrink-0' alt="" />
								<p className='nx-text-sm/[1.7em] nx-text-foreground nx-font-medium'>{item.label}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
