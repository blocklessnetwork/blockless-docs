import type { DocsThemeConfig} from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  // logo: <span>My Nextra Documentation</span>,
  // project: {
  //   link: 'https://github.com/blocklessnetwork/blockless-support-review',
  // },
  docsRepositoryBase: 'https://github.com/blocklessnetwork/blockless-support-review/blob/main',
  // flexsearch: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Blockless'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {
    component: null
  },
  footer: {
    component: null
  },
  themeSwitch: {
    component: null
  },
  feedback: {
    content: 'Question? Give us feedback',
    labels: 'feedback'
  },
  editLink: {
    text: 'Edit this page on GitHub'
  },
}

export default config;