import Link from 'next/link'
import Image from 'next/image'
import logoIcon from '@/src/assets/icons/logo.svg'
import ContainerW1080 from '@/src/components/container/container-w-1080'

export default function Footer() {
	return (
		<div className='nx-border-t'>
			<ContainerW1080>
				<div className="nx-pt-16">
					{/* Logo + Site Map */}
					<div className="nx-flex nx-w-full nx-flex-row nx-justify-between nx-pb-24">
						{/* Logo */}
						<Link href="/">
							<button className="nx-flex-grow nx-flex-row nx-items-center nx-gap-2">
								<Image src={logoIcon} width={24.75} height={27} alt="logo"></Image>
							</button>
						</Link>

						{/* Site map */}
						<div className="nx-flex nx-flex-row nx-gap-10">
							{/* Products 
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-slate-950">
                Products
              </div>
              <ul className="flex flex-col gap-1">
                {NavItem(
                  "https://blockless.network/docs",
                  "Blockless Protocol",
                )}
                {NavItem("https://blockless.network/docs", "Functions")}
                {NavItem("https://blockless.network/docs", "Sites")}
              </ul>
            </div>
            */}

							{/* Developers */}
							<div className="nx-flex nx-flex-col nx-gap-2">
								<div className="nx-text-sm nx-font-medium nx-text-slate-950">Developers</div>
								<ul className="nx-flex nx-flex-col nx-gap-1">
									{NavItem('https://blockless.network/docs', 'Documentation')}
									{NavItem('https://github.com/blocklessnetwork', 'GitHub')}
								</ul>
							</div>

							{/* Resources 
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-slate-950">
                Resources
              </div>
              <ul className="flex flex-col gap-1">
                {NavItem("https://blockless.network/docs", "Pricing")}
                {NavItem("https://blockless.network/docs", "Status")}
              </ul>
            </div>
            */}

							{/* Community */}
							<div className="nx-flex nx-flex-col nx-gap-2">
								<div className="nx-text-sm nx-font-medium nx-text-slate-950">Community</div>
								<ul className="nx-flex nx-flex-col nx-gap-1">
									{NavItem('https://x.com/theblockless', 'X')}
									{NavItem('https://t.me/blocklessofficial', 'Telegram')}
									{NavItem('https://discord.com/invite/9eeRHxSCTZ', 'Discord')}
								</ul>
							</div>
						</div>
					</div>

					<div className="nx-pb-6 nx-text-[13px] nx-text-slate-600">
						© 2023 TX Labs Foundation Ltd.
					</div>
				</div>
			</ContainerW1080>
		</div>
	)
}

function NavItem(href: any, title: string) {
	return (
		<li>
			<Link
				href={href}
				target="_blank"
				className="nx-text-[13px] nx-text-slate-600 hover:nx-text-slate-900"
			>
				{title}
			</Link>
		</li>
	)
}
