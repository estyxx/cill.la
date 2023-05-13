import "styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <div className={` bg-gray`}>
        <Component {...pageProps} />
      </div>
    </main>
  );
}
