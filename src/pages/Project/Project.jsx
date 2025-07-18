import React from "react";
import styles from "./Project.module.css";
import { Images } from "../../common/Images";

function Project() {
  const projectData = [
    {
      id: 1,
      image: Images.hmsproject,
      title: "Hospital Patient Management System",
      skill: ["Java", "Spring Boot", "HTML", "CSS", "MongoDB"],
      description: "Built a Hospital Patient Management System using HTML, CSS and Spring Boot API to perform full CRUD operations on patient details. The system allows adding, updating, viewing, and deleting patient records efficiently. Integrated MongoDB for scalable and flexible data storage. Focused on creating a clean UI with seamless backend integration, ensuring data consistency and secure API handling.",
      sourcecodelink: "https://github.com/abhinavcr/SpringbootAPI"
    },
    {
      id: 2,
      image: Images.cmsproject,
      title: "Contact Management System",
      skill: ["Java", "Spring Boot", "HTML", "CSS", "MySQL", "Thymeleaf"],
      description: "Built a Contact Management System using React.js and Spring Boot to perform full CRUD operations on user contact data. Integrated MySQL for secure and structured data storage. Added email functionality to send messages to specific contacts directly. Ensured smooth API integration and a user-friendly interface for efficient contact tracking.",
      sourcecodelink: "https://github.com/abhinavcr/ContactManagementSystem"
    },
    {
      id: 3,
      image: Images.portfolioproject,
      title: "Portfolio",
      skill: ["Javascript", "HTML", "CSS", "React Js", "Firebase"],
      description: "Developed a responsive personal portfolio using React.js with sections like About, Experience, Projects, and Contact. Integrated Firebase Firestore to store contact form submissions securely. Implemented EmailJS to send real-time email notifications without a backend. Focused on clean UI, mobile responsiveness, and smooth user experience.",
      sourcecodelink: "https://drive.google.com/drive/folders/1pfIb-jRt1nMG2DlbAgfP4C1zVCJPTPUi"
    },
  ];

  return (
    <div id="project" className={styles.projectcont}>
      <h2 className={styles.headertext}>PROJECTS</h2>
      <div className={styles.projectdiv}>
        {projectData.map((item) => {
          return (
            <div key={item.id} className={styles.projectbox}>
              <img
                alt="Loading..."
                src={item?.image}
                className={styles.projectimg}
              />
              <div className={styles.projectdesc}>
                <h2 className={styles.projectname}>{item?.title}</h2>
                <h3 className={styles.projectdesctext}>{item?.description}</h3>
                <div className={styles.skillcont}>
                  {item.skill.map((skill, index) => (
                    <div className={styles.skillbox} key={index}>
                      <h4 className={styles.skilltext}>{skill}</h4>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={() => window.location.href = `${item?.sourcecodelink}`} className={styles.btn}>Source Code</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
