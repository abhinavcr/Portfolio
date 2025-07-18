import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Images } from "../../common/Images";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOption, setMenuOption] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Abhinav Jha</h1>
      <img
        src={menuOption ? Images.cross : Images.menu}
        className={styles.menubtn}
        alt="Menu"
        onClick={() => setMenuOption(!menuOption)}
      />
      <div
        className={`${styles.list} ${menuOption && styles.menuOpen}`}
        onClick={() => setMenuOption(false)}
      >
        <Link
          to="about"
          smooth={true}
          duration={300}
          className={styles.menuitem}
        >
          About
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={300}
          className={styles.menuitem}
        >
          Experience
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={300}
          className={styles.menuitem}
        >
          Project
        </Link>
        <Link
          to="contactus"
          smooth={true}
          duration={300}
          className={styles.menuitem}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
