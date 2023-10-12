import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useConfig } from '@/nextra-theme-docs/src/contexts'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/blocklessnetwork/blockless-support-review/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath === '/' ? 'Docs – Blockless' : '%s – Blockless'
    }
  },
  head: () => {
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:title" content={frontMatter.title || 'Blockless Docs'} />
      <meta property="og:description" content={frontMatter.description || 'Blockless Docs'} />
    </>
  },
  nextThemes: {
    defaultTheme: 'light',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
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
  darkMode: false,
  search:{
    placeholder: 'Documentation',
  },
  gitTimestamp: ({ timestamp }) => {
    const { locale = 'en-US', pathname } = useRouter()
    if(!pathname.startsWith('/docs/')) return null;
    return (
      <>
        Last updated on{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
      </>
    )
  },
}

export default config;