import type { NextraThemeLayoutProps } from 'nextra'
import NextraLayout from '@/nextra-theme-docs/src/index'
import { ConfigProvider } from '@/nextra-theme-docs/src/contexts'
import Layout from '@/src/components/Layout'

export default function ThemeLayout(props: NextraThemeLayoutProps) {
	const { children } = props
  
	return (
		<ConfigProvider value={props}>
			<Layout {...props}>
        <NextraLayout {...props}>{children}</NextraLayout>
			</Layout>
		</ConfigProvider>
	)
}