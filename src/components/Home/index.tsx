import { FC } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import classname from 'classnames'
import { communitiesList, homeNavList } from '@/src/utils/constants/links'
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { renderComponent } from '@/nextra-theme-docs/src/utils'
import helpIcon from '@/src/assets/imgs/home/help.svg'
import { Button } from '@/src/components/ui/button'

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
							<div className="nx-group nx-flex nx-gap-2 nx-text-xl/[1.4em] nx-font-semibold nx-items-center">
								<Image src={item.icon} width="28" alt="" />
								<p className="nx-text-foreground">{item.label}</p>
								<svg
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
                  className="nx-text-mutedForeground nx-w-[15px] group-hover:nx-w-[20px] nx-transition-all"
								>
									<path
										d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
									></path>
								</svg>
								{/* <p className="nx-text-mutedForeground">→</p> */}
							</div>
						</Link>
						<p className="nx-mt-3 nx-text-mutedForeground nx-text-sm/[1.7em]">{item.description}</p>
						<div className="nx-mt-3 nx-flex nx-flex-col nx-gap-3">
							{item.links.map((nav, k) => (
								<Link href={nav.link}>
									<p
										key={k}
										className="md:nx-text-mutedForeground nx-text-foreground  nx-text-sm/[1.7em] md:nx-text-left nx-text-center nx-font-medium md:nx-underline nx-no-underline nx-underline-offset-[3px] nx-border md:nx-border-none nx-border-border nx-py-2 md:nx-py-0 nx-rounded-md md:nx-rounded-none hover:nx-text-slate-900"
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
				<div className="nx-flex nx-mt-6 nx-mb-6 md:nx-mb-0 nx-gap-6 md:nx-flex-row nx-flex-col nx-w-full md:nx-w-fit">
					{communitiesList.map((item, key) => (
						<Link key={key} href={item.link} target="_blank" className="nx-text-center">
							<Button size="lg" variant="outline" className="nx-bg-white nx-w-full">
								<Image src={item.icon} width="16" className="nx-shrink-0 nx-mr-2" alt="" />
								<p className="nx-text-sm/[1.7em] nx-text-foreground nx-font-medium">{item.label}</p>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
