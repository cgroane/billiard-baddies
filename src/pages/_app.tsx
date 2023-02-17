import { GlobalStyles, theme } from '@/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PoolTableContextWrapper } from '@/state/PoolTablesProvider';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <ThemeProvider theme={theme}>
      <PoolTableContextWrapper>
        <GlobalStyles/>
        <Component {...pageProps} />
      </PoolTableContextWrapper>
    </ThemeProvider>
    <Analytics />
  </>
}
