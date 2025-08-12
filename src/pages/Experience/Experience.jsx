import React, { useRef, useState, useEffect } from "react";
import styles from "./Experience.module.css";
import { Images } from "../../common/Images";

function Experience() {
  const experienceRef = useRef(null);
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
        threshold: 0.5,
      }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const companyData = [
    {
      id: 1,
      companyimg: Images.firstcompany,
      position: "React Native",
      companyname: "Maxtra Technologies Pvt. Ltd.",
      duration: "May 2024 - Present",
      description: [
        "Developed and maintained reusable React Native components, screens, and features to support core mobile application functionality.",
        "Integrated RESTful APIs in collaboration with backend teams to enable real-time data retrieval and synchronisation.",
        "Implemented Redux for robust and scalable state management, ensuring consistent and responsive user experiences.",
        "Utilized third-party libraries and services including Firebase, Google Maps, and Language Translation to enhance application functionality.",
      ],
    },
  ];

  const skillData = [
    { id: 1, skillname: "HTML", skillimg: Images.htmllogo },
    { id: 2, skillname: "CSS", skillimg: Images.csslogo },
    { id: 3, skillname: "Javascript", skillimg: Images.jslogo },
    { id: 4, skillname: "React Native", skillimg: Images.reactnativelogo },
    { id: 5, skillname: "React Js", skillimg: Images.reactnativelogo },
    { id: 6, skillname: "MongoDB", skillimg: Images.mongodblogo },
  ];

  return (
    <div
      id="experience"
      ref={experienceRef}
      className={`${styles.experienceCont} ${isVisible && styles.slideinright}`}
    >
      <h1 className={styles.headertext}>EXPERIENCE</h1>
      <div className={styles.row}>
        <div className={styles.skilliconcont}>
          {skillData.map((item) => {
            return (
              <div key={item.id} className={styles.skillbox}>
                <div className={styles.skillcircle}>
                  <img
                    alt="Loading..."
                    src={item?.skillimg}
                    className={styles.skillimg}
                  />
                </div>
                <p className={styles.skilltext}>{item?.skillname}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.companycont}>
          {companyData.map((item) => {
            return (
              <div key={item.id} className={styles.companybox}>
                <img
                  alt="Loading..."
                  src={item?.companyimg}
                  className={styles.companyimg}
                />
                <div className={styles.companydes}>
                  <p className={styles.companyname}>
                    {item?.companyname}, {item?.position}
                  </p>
                  <p className={styles.companyduration}>{item?.duration}</p>
                  {item?.description?.map((desc, index) => (
                    <ul>
                      <p className={styles.workdesc} key={index}>
                        {desc}
                      </p>
                    </ul>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;