import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import styles from "../styles/FAQ.module.css";
import faq from "../data/faq.js";
import arrow from "../images/arrow.svg";
import Arrow from "../components/imgComponents/Arrow";
import Dots from "../components/imgComponents/Dots";

const FAQ = () => {
  const [toggleFAQ, setToggleFAQ] = useState(null);

  const openFAQ = (id) => {
    toggleFAQ === id ? setToggleFAQ(null) : setToggleFAQ(id);
  };

  return (
    <section className={styles.FAQ} id="FAQ">
      <div className={styles.FAQText}>
        <h2>FAQ</h2>
        <p>
          Didn't find an answer to your question? <br /> We'd be happy to speak
          with you.
        </p>
        <Link
          className={styles.FAQBtn}
          to="top"
          smooth={"easeInOutQuint"}
          duration={800}
          delay={100}
        >
          Contact
        </Link>
      </div>
      <div className={styles.FAQBox}>
        {faq.map((obj) => (
          <div
            key={obj.id}
            className={
              toggleFAQ === obj.id
                ? `${styles.FAQBlock} ${styles.FAQBlockActive}`
                : `${styles.FAQBlock}`
            }
            onClick={() => {
              openFAQ(obj.id);
            }}
          >
            <h5 className={styles.FAQQuestion}>
              {obj.question}
              {/* <Image className={styles.FAQArrow} src={arrow} alt="" /> */}
              <Arrow />
            </h5>
            <p>{obj.answer}</p>
          </div>
        ))}
      </div>
      <div className={styles.scrollDown}>
        <p>Scroll down</p>
      </div>
      <Dots id={true} color={"cool"} half={true} />
    </section>
  );
};

export default FAQ;
