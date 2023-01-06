import { useState, useEffect } from "react";
import Head from "next/head";

import Loading from "../components/Loading";
import MobileMenu from "../components/MobileMenu";
import Nav from "../components/Nav";
import Burger from "../components/Burger";
import ToTop from "../components/ToTop";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [fromTop, setFromTop] = useState(false);
  const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   isDark ? setTheme("dark") : setTheme("light");
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", (e) => {
  //       if (e.matches) {
  //         setTheme("dark");
  //       } else {
  //         setTheme("light");
  //       }
  //     });
  // }, []);

  useEffect(() => {
    const closeMenu = () => window.innerWidth > 768 && setMenu(false);
    window.addEventListener("resize", closeMenu);

    let checkTopDistance = () => {
      if (window) {
        window.scrollY > 560 ? setFromTop(true) : setFromTop(false);
      }
    };

    window.addEventListener("scroll", checkTopDistance);

    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", checkTopDistance);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>All Solutions Heating & AC</title>
        <meta
          name="description"
          content="We provide repairs and replacement for heating and AC components. Opperating within the Salt Lake Valley and surrounding areas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="top">
        <Loading />
        <Nav />
        <Burger menu={menu} setMenu={setMenu} />
        <MobileMenu menu={menu} setMenu={setMenu} />
        <ToTop fromTop={fromTop} />
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer theme={theme} setTheme={setTheme} />
      </main>
    </div>
  );
}
