import sitesIcon from '@/src/assets/icons/docIndex/sites.svg'
import triggersIcon from '@/src/assets/icons/docIndex/triggers.svg'
import dataIcon from '@/src/assets/icons/docIndex/data.svg'
import zkIcon from '@/src/assets/icons/docIndex/zk.svg'
import discordIcon from '@/src/assets/icons/community/discord.svg'
import githubIcon from '@/src/assets/icons/community/github.svg'
import telegramIcon from '@/src/assets/icons/community/telegram.svg'
import protocolIcon from '@/src/assets/imgs/home/protocol.svg'
import networkIcon from '@/src/assets/imgs/home/network.svg'
import toolsIcon from '@/src/assets/imgs/home/tools.svg'

export const twitterLink = 'https://twitter.com/theblockless'

export const communityLinks = [
	{
		id: 'join',
		label: 'Join to our community',
		path: '/',
		icon: '',
		isExternal: false
	},
	{
		id: 'twitter',
		label: 'Twitter',
		path: twitterLink,
		icon: '',
		isExternal: true
	},
	{
		id: 'telegram',
		label: 'Telegram',
		path: 'https://t.me/blocklessofficial',
		icon: telegramIcon,
		isExternal: true
	},
	{
		id: 'discord',
		label: 'Discord',
		path: 'https://discord.com/invite/9eeRHxSCTZ',
		icon: discordIcon,
		isExternal: true
	},
	{
		id: 'github',
		label: 'GitHub',
		path: 'https://github.com/blocklessnetwork',
		icon: githubIcon,
		isExternal: true
	}
]

export const footerLinks = [
	{
		label: 'Developers',
		children: [
			{
				label: 'Documentation',
				link: '/',
				isExternal: false
			},
			{
				label: 'GitHub',
				link: 'https://github.com/blocklessnetwork',
				isExternal: true
			}
		]
	},
	{
		label: 'Community',
		children: [
			{
				label: 'X',
				link: twitterLink,
				isExternal: true
			},
			{
				label: 'Telegram',
				link: 'https://t.me/blocklessofficial',
				isExternal: true
			},
			{
				label: 'Discord',
				link: 'https://discord.com/invite/9eeRHxSCTZ',
				isExternal: true
			}
		]
	}
]

export const loginLink = 'https://dashboard.blockless.network/'

export const documentationIndexList = [
	{
		id: 'sites',
		title: 'Sites',
		desc: 'Build your own decentralized website',
		icon: sitesIcon,
		link: ''
	},
	{
		id: 'triggers',
		title: 'Triggers',
		desc: 'Automate your smart contracts in a trustless way',
		icon: triggersIcon,
		link: ''
	},
	{
		id: 'data',
		title: 'Data',
		desc: 'All the data APIs you will need for your dApp',
		icon: dataIcon,
		link: ''
	},
	{
		id: 'zk',
		title: 'ZK',
		desc: 'Zero Knowledge, Zero Effort',
		icon: zkIcon,
		link: ''
	}
]

export const homeNavList = [
	{
		label: 'Blockless Protocol',
		description: 'Discover the key technologies supporting Network Neutral Applications.',
		link: '/protocol',
		icon: protocolIcon,
		links: [
			{
				label: 'Core Concepts',
				link: '/protocol/core-concepts'
			},
			{
				label: 'Networking',
				link: '/protocol/networking'
			},
			{
				label: 'Runtime',
				link: '/protocol/runtime'
			}
		]
	},
	{
		label: 'Blockless Network',
		description: 'Get started and deploy your first Network Neutral Application on Blockless.',
		link: '/network',
		icon: networkIcon,
		links: [
			{
				label: 'Blockless Functions',
				link: '/network'
			},
			{
				label: 'Quick Start',
				link: '/network/quick-start'
			},
			{
				label: 'Tutorials',
				link: '/network/tutorials'
			}
		]
	},
	{
		label: 'Tools and References',
		description:
			'Learn how to use the Blockless developer tools to build, test, and manage applications.',
		link: '/developer-tools',
		icon: toolsIcon,
		links: [
			{
				label: 'Command-Line Interface (CLI)',
				link: '/developer-tools/cli/quick-start'
			},
			{
				label: 'Software Development Kit (SDK)',
				link: '/developer-tools/sdks'
			},
			{
				label: 'References',
				link: '/reference/networking'
			}
		]
	}
]

export const communitiesList = [
	{
		label: 'Discord',
		icon: discordIcon,
		link: 'https://discord.com/invite/9eeRHxSCTZ'
	},
	{
		label: 'Telegram',
		icon: telegramIcon,
		link: 'https://t.me/blocklessofficial'
	},
	{
		label: 'GitHub',
		icon: githubIcon,
		link: 'https://github.com/blocklessnetwork'
	}
]
