import '../global/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import nProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import "../public/nprogress.scss";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp