import { GlobalStyles, theme } from '@/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PoolTableContextWrapper } from '@/state/PoolTablesProvider';
import { Analytics } from '@vercel/analytics/react';
import { AppWrapper } from '@/state/mongoProvider';
import { useMemo, useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [windowHeight, setWindowHeight] = useState<number>(0)
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight)
    }
  }, [setWindowHeight]);
  return <>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <PoolTableContextWrapper>
          <GlobalStyles windowHeight={windowHeight} />
          <Component {...pageProps} />
        </PoolTableContextWrapper>
      </AppWrapper>
    </ThemeProvider>
    <Analytics />
  </>
}
