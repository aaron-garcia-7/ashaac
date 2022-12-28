import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import unit1 from "../images/unit1.svg";
import unit2 from "../images/unit2.svg";
import unit3 from "../images/unit3.svg";
import HeroText from "../components/HeroText";
// import Text5 from "../components/heroText/text5";
import Dots from "../components/imgComponents/Dots";
import Arrow from "../components/imgComponents/Arrow";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>All Solutions</h1>
        {/* <Text5 /> */}
        <HeroText />
        <br />
        <h2>
          Let’s restore <em style={styles.em2}>comfort</em>
          <br /> to your home.
        </h2>
        <div className={styles.ctaDiv}>
          <button className={styles.cta1}>
            <Link to="">Contact</Link>
          </button>
          <button className={styles.cta2}>
            <Link
              to="services"
              smooth={"easeInOutQuint"}
              // offset={50}
              duration={800}
              delay={100}
            >
              Services
            </Link>
            &nbsp;
            <div>
              <Arrow />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Dots color={"warm"} />
        <Dots color={"cool"} />
        <Image
          src={unit1}
          alt="cartoon style heating system"
          className={styles.unit1}
        />
        <Image
          src={unit2}
          alt="cartoon style AC system"
          className={styles.unit2}
        />
        <Image
          src={unit3}
          alt="cartoon style ceiling vent"
          className={styles.unit3}
        />
      </div>
    </section>
  );
};

export default Hero;
