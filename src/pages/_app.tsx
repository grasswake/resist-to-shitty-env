// https://nextjs.org/docs/pages/building-your-application/routing/custom-app

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
