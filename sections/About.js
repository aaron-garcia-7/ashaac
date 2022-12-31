import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import StrokeText2 from "../components/subText/StrokeText2";
import unit5 from "../images/unit5.svg";
import unit6 from "../images/unit6.svg";
import Dots from "../components/imgComponents/Dots";
import Arrow from "../components/imgComponents/Arrow";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.retainer}>
        <div className={styles.aboutText}>
          <h2>About</h2>
          <p>
            <em>All Solutions</em> is exactly that, the all-in-one package for
            any HVAC services you need. The owner, Mauricio Garcia, is a trained
            technician with x years of experience.
          </p>
          <p>
            <em>Our commitment</em> is to restore comfort to your home. We
            strongly believe in treating your home with respect and care.
          </p>
          <div className={styles.btnDiv}>
            <button className={styles.primaryBtn}>Contact</button>
            <button className={styles.secondaryBtn}>
              Free consultation &nbsp;
              <div>
                <Arrow col3={true} />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.aboutImgs}>
          <Image
            className={styles.aboutUnit1}
            src={unit6}
            alt="Cartoon style air conditioner"
          />
          <Image
            className={styles.aboutUnit2}
            src={unit5}
            alt="Cartoon style heater"
          />
          <Dots />
          <Dots />
        </div>
        <StrokeText2 />
      </div>
    </section>
  );
};

export default About;
