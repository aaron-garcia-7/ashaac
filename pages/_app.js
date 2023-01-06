import "../styles/globals.css";
import localFont from "@next/font/local";
// const satoshi = localFont({ src: "../public/fonts/Satoshi-Light.otf" });
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/Satoshi-Black.otf",
      weight: "700",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    // <main className={satoshi.className}>
    <>
      <style jsx global>{`
        :root {
          --satoshi: ${satoshi.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
    // </main>
  );
}

export default MyApp;
