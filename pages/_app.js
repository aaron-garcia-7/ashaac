import "../styles/globals.css";
import localFont from "@next/font/local";
const satoshi = localFont({ src: "../fonts/Satoshi-Light.otf" });

function MyApp({ Component, pageProps }) {
  return (
    <main className={satoshi.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
