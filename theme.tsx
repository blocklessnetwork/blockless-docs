import type { NextraThemeLayoutProps } from 'nextra'
import NextraLayout from 'nextra-theme-docs'
import { MDXProvider } from 'nextra/mdx'

// type NextraThemeLayoutProps = {
//   pageOpts: PageOpts;
//   pageProps: any;
//   themeConfig: ThemeConfig;
//   children: ReactNode;
// };

// export default function Layout({
//   children,
//   ...context
// }: NextraThemeLayoutProps): ReactElement {
//   return (
//     <ConfigProvider value={context}>
//       <InnerLayout {...context.pageOpts}>{children}</InnerLayout>
//     </ConfigProvider>
//   )
// }
 
// export default NextraLayout
export default function Layout({ children }: NextraThemeLayoutProps) {
  // return (
  //   <NextraLayout>
  //     {children}
  //   </NextraLayout>
  // )
  return (
    <div>
      <h1>My Theme</h1>
      <div style={{ border: '1px solid' }}>
        {children}
      </div>
    </div>
  )
}