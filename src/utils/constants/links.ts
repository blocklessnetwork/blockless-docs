import { conceptsRoutes } from './concepts';
import { docsRoutes } from './documentstion';
import { referenceRoutes } from './reference';

export const twitterLink = 'https://twitter.com/theblockless';

export const communityLinks = [
  {
    id: 'join',
    label: 'Join to our community',
    path: '/',
    isExternal: false,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    path: twitterLink,
    isExternal: true,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    path: 'https://t.me/blocklessofficial',
    isExternal: true,
  },
  {
    id: 'discord',
    label: 'Discord',
    path: 'https://discord.com/invite/9eeRHxSCTZ',
    isExternal: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    path: 'https://github.com/txlabs',
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
      path: '/',
    },
    {
      id: 'careers',
      label: 'Careers',
      path: 'https://txlabs.freshteam.com/jobs',
      isExternal: true,
    },
  ],
};

export const loginLink = 'https://console.bls.dev/';

//menus
export const navbarMenu = [
  {
    id: 'help',
    label: 'Help',
    path: '/',
    isExternal: false,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    path: '/docs',
    isExternal: false,
  },
  {
    id: 'concepts',
    label: 'Concepts',
    path: conceptsRoutes.overview,
    isExternal: false,
  },
  {
    id: 'reference',
    label: 'Reference',
    path: referenceRoutes.overview,
    isExternal: false,
  },
];

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
