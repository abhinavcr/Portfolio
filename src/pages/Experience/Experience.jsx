import React from "react";
import styles from "./Experience.module.css";
import { Images } from "../../common/Images";

function Experience() {
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
    }
  ];

  const skillData = [
    { id: 1, skillname: "HTML", skillimg: Images.htmllogo },
    { id: 2, skillname: "CSS", skillimg: Images.csslogo },
    { id: 3, skillname: "Javascript", skillimg: Images.jslogo },
    { id: 4, skillname: "React Native", skillimg: Images.reactnativelogo },
    { id: 5, skillname: "React Js", skillimg: Images.reactnativelogo },
    { id: 6, skillname: "MongoDB", skillimg: Images.mongodblogo },
  ];

  const width = window.innerWidth
  console.log(width)

  return (
    <div id="experience" className={styles.experienceCont}>
      <h2 className={styles.headertext}>EXPERIENCE</h2>
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
                <h3 className={styles.skilltext}>{item?.skillname}</h3>
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
                  <h2 className={styles.companyname}>
                    {item?.companyname}, {item?.position}
                  </h2>
                  <h4 className={styles.companyduration}>{item?.duration}</h4>
                  {item?.description?.map((desc, index) => (
                    <ul>
                      <h3 className={styles.workdesc} key={index}>
                        {desc}
                      </h3>
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
