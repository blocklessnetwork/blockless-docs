import { conceptsRoutes } from './concepts'
import { docsRoutes } from './documentstion'
import { referenceRoutes } from './reference'
import sitesIcon from '@/src/assets/icons/docIndex/sites.svg'
import triggersIcon from '@/src/assets/icons/docIndex/triggers.svg'
import dataIcon from '@/src/assets/icons/docIndex/data.svg'
import zkIcon from '@/src/assets/icons/docIndex/zk.svg'
import discordIcon from '@/src/assets/icons/community/discord.svg'
import githubIcon from '@/src/assets/icons/community/github.svg'
import telegramIcon from '@/src/assets/icons/community/telegram.svg'
// import menuJson from '@/src/pages/docs/menu.json';
const menuJson = [
	{
		name: 'Protocol',
		path: '/docs/protocol',
		subMenu: [
			{
				name: 'Networking',
				path: '/docs/protocol/networking',
				subMenu: [
					{
						name: 'Selection',
						path: '/docs/protocol/networking/selection'
					},
					{
						name: 'Communication',
						path: '/docs/protocol/networking/communication'
					},
					{
						name: 'Execution Flow',
						path: '/docs/protocol/networking/execution-flow'
					},
					{
						name: 'Execution',
						path: '/docs/protocol/networking/execution'
					},
					{
						name: 'Deployment',
						path: '/docs/protocol/networking/deployment'
					},
					{
						name: 'Distribution',
						path: '/docs/protocol/networking/distribution'
					},
					{
						name: 'Consensus',
						path: '/docs/protocol/networking/consensus'
					}
				]
			},
			{
				name: 'Core Concepts',
				path: '/docs/protocol/core-concepts'
			},
			{
				name: 'Runtime',
				path: '/docs/protocol/runtime'
			},
			{
				name: 'Security',
				path: '/docs/protocol/security',
				subMenu: [
					{
						name: 'Secret Management',
						path: '/docs/protocol/security/secret-management'
					},
					{
						name: 'Runtime Security',
						path: '/docs/protocol/security/runtime-security'
					},
					{
						name: 'Result Verifiability',
						path: '/docs/protocol/security/result-verifiability'
					}
				]
			},
			{
				name: 'Extension',
				path: '/docs/protocol/extension'
			},
			{
				name: 'Account',
				path: '/docs/protocol/account'
			},
			{
				name: 'Nodes',
				subMenu: [
					{
						name: 'Ranking',
						path: '/docs/protocol/nodes/ranking'
					},
					{
						name: 'Node Types',
						path: '/docs/protocol/nodes/node-types'
					}
				]
			},
			{
				name: 'Economics',
				subMenu: [
					{
						name: 'Execution Network Economics',
						path: '/docs/protocol/economics/execution-network-economics'
					},
					{
						name: 'Orchestration Network Economics',
						path: '/docs/protocol/economics/orchestration-network-economics'
					}
				]
			}
		]
	},
	{
		name: 'Functions',
		path: '/docs/functions',
		subMenu: [
			{
				name: 'Quickstart',
				path: '/docs/functions/quick-start'
			},
			{
				name: 'Function Manifest',
				path: '/docs/functions/function-manifest'
			},
			{
				name: 'Extensions',
				path: '/docs/functions/extensions'
			},
			{
				name: 'Functions Workflow',
				path: '/docs/functions/functions-workflow',
				subMenu: [
					{
						name: 'Requesting Data from Host',
						path: '/docs/functions/tutorials/requesting-data'
					},
					{
						name: 'Passing Data to Other Functions',
						path: '/docs/functions/tutorials/passing-data'
					}
				]
			},
			{
				name: 'Tutorials',
				path: '/docs/functions/tutorials',
				subMenu: [
					{
						name: 'Serverless Todo App',
						path: '/docs/functions/tutorials/serverless-todo-app'
					}
				]
			}
		]
	},
	{
		name: 'Developer Tools',
		path: '/docs/developer-tools/',
		subMenu: [
			{
				name: 'Dashboard',
				path: '/docs/developer-tools/dashboard'
			},
			{
				name: 'CLI',
				path: '/docs/developer-tools/cli',
				subMenu: [
					{
						name: 'Quick Start',
						path: '/docs/developer-tools/cli/quick-start'
					}
				]
			},
			{
				name: 'SDKs',
				path: '/docs/developer-tools/sdks',
				subMenu: [
					{
						name: 'AssemblyScript',
						path: '/docs/developer-tools/cli/assemblyscript',
						subMenu: [
							{
								name: 'Memory',
								path: '/docs/developer-tools/cli/assemblyscript/memory'
							},
							{
								name: 'HTTP',
								path: '/docs/developer-tools/cli/assemblyscript/http'
							}
						]
					}
				]
			}
		]
	},
	{
		name: 'Reference',
		path: '/docs/reference/networking',
		subMenu: [
			{
				name: 'Networking',
				path: '/docs/reference/networking'
			},
			{
				name: 'Runtime Environment',
				path: '/docs/reference/runtime-environment'
			},
			{
				name: 'CLI',
				path: '/docs/reference/cli/identity-and-account',
				subMenu: [
					{
						name: 'Identity and Account',
						path: '/docs/reference/cli/identity-and-account'
					},
					{
						name: 'Components',
						path: '/docs/reference/cli/components'
					},
					{
						name: 'Functions',
						path: '/docs/reference/cli/functions'
					},
					{
						name: 'Help',
						path: '/docs/reference/cli/help'
					},
					{
						name: 'Update',
						path: '/docs/reference/cli/update'
					},
					{
						name: 'Dashboard',
						path: '/docs/reference/cli/dashboard'
					}
				]
			},
			{
				name: 'AssemblyScript SDK',
				path: '/docs/reference/assemblyscript-sdk/memory',
				subMenu: [
					{
						name: 'Memory',
						path: '/docs/reference/assemblyscript-sdk/memory/stdin',
						subMenu: [
							{
								name: 'Stdin',
								path: '/docs/reference/assemblyscript-sdk/memory/stdin'
							},
							{
								name: 'EnvVar',
								path: '/docs/reference/assemblyscript-sdk/memory/envvar'
							}
						]
					}
				]
			}
		]
	}
]

export interface menuItem {
	name: string
	path?: string
	subMenu?: menuItem[]
}

export const docsMenu = menuJson || []
//menus
export const navbarMenu = [
	{
		name: 'Home',
		path: '/docs'
	},
	...docsMenu
]

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

export const footerLinks = {
	resources: [
		{
			id: 'use-cases',
			label: 'Use Cases',
			path: 'https://blockless.network/use-cases',
			isExternal: true
		},
		{
			id: 'customers',
			label: 'Customers',
			path: 'https://blockless.network/customers',
			isExternal: true
		}
	],
	community: communityLinks.slice(1),
	company: [
		{
			id: 'blog',
			label: 'Blog',
			path: 'https://blockless.network/blog',
			isExternal: true
		},
		{
			id: 'careers',
			label: 'Careers',
			path: 'https://txlabs.freshteam.com/jobs',
			isExternal: true
		}
	]
}

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

export const documentationItems = [
	{
		id: 'faq',
		title: 'FAQ',
		link: docsRoutes.faqGeneral
	},
	{
		id: 'functions',
		title: 'Functions',
		link: docsRoutes.functionGeneral
	},
	{
		id: 'account',
		title: 'Account',
		link: docsRoutes.accountOverview
	},
	{
		id: 'cli',
		title: 'CLI',
		link: docsRoutes.cliOverview
	},
	{
		id: 'concepts',
		title: 'Concepts',
		link: conceptsRoutes.overview
	},
	{
		id: 'reference',
		title: 'Reference',
		link: referenceRoutes.overview
	}
]
