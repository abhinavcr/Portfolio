import React from "react";
import styles from "./Hero.module.css";
import { Images } from "../../common/Images";

function Hero() {
  return (
    <div className={styles.introcont}>
      <div className={styles.textcont}>
        <h1 className={styles.textname}>Hi, I'm Abhinav</h1>
        <h3 className={styles.textintro}>
          I’m a React and React Native developer with 1 year of experience in
          building modern, responsive web and mobile applications. I focus on
          delivering smooth user experiences across platforms. Passionate about
          continuous learning and delivering high-quality digital solutions.
        </h3>
      </div>
      <div className={styles.circle}>
        <img alt="Loading..." src={Images.heroimg} className={styles.heroimg} />
      </div>
    </div>
  );
}

export default Hero;
