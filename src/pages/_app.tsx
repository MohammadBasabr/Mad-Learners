import AppContextProvider from '@/context/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <AppContextProvider><Component {...pageProps} /></AppContextProvider>
}
