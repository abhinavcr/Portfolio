import React, { useRef, useState, useEffect } from "react";
import styles from "./About.module.css";
import { Images } from "../../common/Images";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={aboutRef} className={`${styles.aboutcont} ${isVisible && styles.slideinleft}`}>
      <h2 className={styles.headertext}>ABOUT</h2>
      <div className={styles.row}>
        <img
          alt="Loading..."
          src={Images.herowithlaptop}
          className={styles.aboutimg}
        />
        <div className={styles.skillcont}>
          <div className={styles.skillbox}>
            <img
              alt="Loading..."
              src={Images.frontendimg}
              className={styles.skillimg}
            />
            <div className={styles.skilltextcont}>
              <h1 className={styles.skillheadertext}>Frontend Developer</h1>
              <h2 className={styles.skilltext}>
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </h2>
            </div>
          </div>
          <div className={styles.skillbox}>
            <img
              alt="Loading..."
              src={Images.backendimg}
              className={styles.skillimg}
            />
            <div className={styles.skilltextcont}>
              <h1 className={styles.skillheadertext}>Backend Developer</h1>
              <h2 className={styles.skilltext}>
                I have experience developing fast and optimised back-end systems
                and APIs
              </h2>
            </div>
          </div>
          <div className={styles.skillbox}>
            <img
              alt="Loading..."
              src={Images.uidesign}
              className={styles.skillimg}
            />
            <div className={styles.skilltextcont}>
              <h1 className={styles.skillheadertext}>UI Designer</h1>
              <h2 className={styles.skilltext}>
                I have designed multiple landing pages and have created design
                systems as well
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
