import React from "react";
import Image from "next/image";
import styles from "../styles/Services.module.css";
import StrokeText1 from "../components/subText/StrokeText1";
import unit4 from "../images/unit4.svg";
import unit7 from "../images/unit7.svg";
import Dots from "../components/imgComponents/Dots";
import Arrow from "../components/imgComponents/Arrow";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.retainer}>
        <div className={styles.servicesText}>
          <h2>Services</h2>
          <p>
            We provide <strong>tune ups, repair, and replacement</strong> for
            all heating and air conditioning components. We also provide
            maintenance on condensers, furnaces, filters, and more.
          </p>
          <p>
            <em>Need urgent assistance?</em> Same day visits may be available up
            on request. Contact us to find out.
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
        <div className={styles.servicesImgs}>
          <Image
            className={styles.serviceUnit1}
            src={unit4}
            alt="Cartoon style air conditioner"
          />
          <Image
            className={styles.serviceUnit2}
            src={unit7}
            alt="Cartoon style heater"
          />
          <Dots />
          <Dots />
        </div>
        <StrokeText1 />
      </div>
    </section>
  );
};

export default Services;
