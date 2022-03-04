import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import "styles/globals.css";
import "styles/prism.css";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
