import { useState } from "react";
import Head from "next/head";
import Loading from "../components/Loading";
import MobileMenu from "../components/MobileMenu";
import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import Burger from "../components/Burger";
import Services from "../sections/Services";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const [menu, setMenu] = useState(false);

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
      <main>
        <Loading />
        <Nav />
        <Burger menu={menu} setMenu={setMenu} />
        <MobileMenu menu={menu} setMenu={setMenu} />
        <Hero />
        <Services />
      </main>
    </div>
  );
}
