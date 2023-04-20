import { conceptsRoutes } from './concepts';
import { docsRoutes } from './documentstion';
import { referenceRoutes } from './reference';
import sitesIcon from '@/src/assets/icons/docIndex/sites.svg';
import triggersIcon from '@/src/assets/icons/docIndex/triggers.svg';
import dataIcon from '@/src/assets/icons/docIndex/data.svg';
import zkIcon from '@/src/assets/icons/docIndex/zk.svg';
import discordIcon from '@/src/assets/icons/community/discord.svg';
import githubIcon from '@/src/assets/icons/community/github.svg';
import telegramIcon from '@/src/assets/icons/community/telegram.svg';
import menuJson from '@/src/pages/docs/menu.json';

export interface menuItem {
  name: string
  path?: string
  subMenu?: menuItem[]
}

export const docsMenu = menuJson || [];
//menus
export const navbarMenu = [
  {
    name: 'Home',
    path: "/docs",
  },
  ...docsMenu
];


export const twitterLink = 'https://twitter.com/theblockless';

export const communityLinks = [
  {
    id: 'join',
    label: 'Join to our community',
    path: '/',
    icon: '',
    isExternal: false,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    path: twitterLink,
    icon: '',
    isExternal: true,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    path: 'https://t.me/blocklessofficial',
    icon: telegramIcon,
    isExternal: true,
  },
  {
    id: 'discord',
    label: 'Discord',
    path: 'https://discord.com/invite/9eeRHxSCTZ',
    icon: discordIcon,
    isExternal: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    path: 'https://github.com/blocklessnetwork',
    icon: githubIcon,
    isExternal: true,
  },
];

export const footerLinks = {
  resources: [
    {
      id: 'use-cases',
      label: 'Use Cases',
      path: 'https://blockless.network/use-cases',
      isExternal: true,
    },
    {
      id: 'customers',
      label: 'Customers',
      path: 'https://blockless.network/customers',
      isExternal: true,
    },
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
      isExternal: true,
    },
  ],
};

export const loginLink = 'https://dashboard.blockless.network/';



export const documentationIndexList = [
  {
    id: 'sites',
    title: 'Sites',
    desc: 'Build your own decentralized website',
    icon: sitesIcon,
    link: '',
  },
  {
    id: 'triggers',
    title: 'Triggers',
    desc: 'Automate your smart contracts in a trustless way',
    icon: triggersIcon,
    link: '',
  },
  {
    id: 'data',
    title: 'Data',
    desc: 'All the data APIs you will need for your dApp',
    icon: dataIcon,
    link: '',
  },
  {
    id: 'zk',
    title: 'ZK',
    desc: 'Zero Knowledge, Zero Effort',
    icon: zkIcon,
    link: '',
  },
]

export const documentationItems = [
  {
    id: 'faq',
    title: 'FAQ',
    link: docsRoutes.faqGeneral,
  },
  {
    id: 'functions',
    title: 'Functions',
    link: docsRoutes.functionGeneral,
  },
  {
    id: 'account',
    title: 'Account',
    link: docsRoutes.accountOverview,
  },
  {
    id: 'cli',
    title: 'CLI',
    link: docsRoutes.cliOverview,
  },
  {
    id: 'concepts',
    title: 'Concepts',
    link: conceptsRoutes.overview,
  },
  {
    id: 'reference',
    title: 'Reference',
    link: referenceRoutes.overview,
  },
];
