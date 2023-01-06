import React from "react";
import styles from "../styles/Contact.module.css";

import facebookImg from "../images/facebook.svg";
import messengerImg from "../images/messenger.svg";
import whatsAppImg from "../images/whatsApp.svg";
import Image from "next/image";
import Dots from "../components/imgComponents/Dots";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.retainer}>
        <div className={styles.leftSide}>
          <h2>Contact</h2>
          <form
            name="contact"
            method="post"
            action="/contact"
            className={styles.form}
            netlify="true"
            netlify-honeypot="bot-field"
            // hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.formField}>
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
            </div>
            <div className={styles.formField}>
              <input
                type="tel"
                name="phone"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="phone" className={styles.label}>
                Phone
              </label>
            </div>
            <div className={styles.dropDowns}>
              <div className={styles.dropDownBox}>
                <label htmlFor="service">Service</label>
                <select name="service" className={styles.select}>
                  <option value="">Please Choose</option>
                  <option htmlFor="service" value="repair">
                    Repair
                  </option>
                  <option htmlFor="service" value="replacement">
                    Replacement
                  </option>
                  <option htmlFor="service" value="other">
                    Other
                  </option>
                </select>
              </div>
              <div className={styles.dropDownBox}>
                <label htmlFor="urgency">Urgency</label>
                <select name="urgency" className={styles.select}>
                  <option value="">Please Choose</option>
                  <option htmlFor="urgency" value="non-urgent">
                    Non-urgent
                  </option>
                  <option htmlFor="urgency" value="urgent">
                    Urgent
                  </option>
                  <option htmlFor="urgency" value="ASAP">
                    ASAP
                  </option>
                </select>
              </div>
            </div>
            <div className={`${styles.formField} ${styles.textareaFormField}`}>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder=" "
                className={styles.textarea}
              ></textarea>
              <label
                htmlFor="message"
                className={`${styles.label} ${styles.textareaLabel}`}
              >
                Message
              </label>
            </div>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.altContact}>
            <h5>Text or call</h5>
            <a href="tel:8017553040" className={styles.altLink}>
              801 755 3040
            </a>
          </div>
          <div className={styles.altContact}>
            <h5>Email</h5>
            <a href="mailto:ashaacutah@gmail.com" className={styles.altLink}>
              ashaacutah@gmail.com
            </a>
          </div>
          <div className={styles.altContact}>
            <h5>Social</h5>
            <div className={styles.mediaLinks}>
              <a href="">
                <Image
                  src={facebookImg}
                  alt="facebook logo"
                  className={styles.mediaImg}
                />
              </a>
              <a href="">
                <Image
                  src={messengerImg}
                  alt="facebook messenger logo"
                  className={styles.mediaImg}
                />
              </a>
              <a href="">
                <Image
                  src={whatsAppImg}
                  alt="whatsapp logo"
                  className={styles.mediaImg}
                />
              </a>
            </div>
          </div>
        </div>
        <Dots />
      </div>
    </section>
  );
};

export default Contact;
