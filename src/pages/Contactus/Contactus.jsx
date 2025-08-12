import React, { useState } from "react";
import styles from "./Contactus.module.css";
import { Images } from "../../common/Images";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Users"), {
        name: name,
        email: email,
        number: number,
        message: message,
        createdAt: new Date(),
      });

      const templateParams = {
        name,
        email,
        number,
        message,
      };
  
      await emailjs.send(
        'service_978cdzf',
        'template_baaq1lc',
        templateParams,
        'un0bCrvLn7jzz8U7d'
      );

      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire('Oops!', 'Something went wrong.', 'error');
    }
  };

  return (
    <footer id="contactus" className={styles.footercont}>
      <form onSubmit={handleSubmit} className={styles.formcont}>
        <h2 className={styles.formheader}>Contact Us</h2>
        <label className={styles.inputlable}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputbox}
            required
          />
        </label>
        <label className={styles.inputlable}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputbox}
            required
          />
        </label>
        <label className={styles.inputlable}>
          Number
          <input
            type="number"
            name="number"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={styles.inputbox}
            required
          />
        </label>
        <label className={styles.inputlable}>
          Message
          <textarea
            name="message"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.inputbox}
            required
          />
        </label>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
      <div className={styles.row}>
        <div className={styles.contactustext}>
          <h1 className={styles.contactheader}>Contact Us</h1>
          <h3 className={styles.contacttext}>Feel free to reach out!</h3>
        </div>
        <div className={styles.contactussocial}>
          <a
            onClick={() =>
              (window.location.href = "mailto:jhaabhinav736@gmail.com")
            }
            className={styles.socialcont}
          >
            <img
              alt="Loading..."
              src={Images.mail}
              className={styles.socialimg}
            />
            <p className={styles.socialtext}>jhaabhinav736@gmail.com</p>
          </a>
          <a
            onClick={() =>
              (window.location.href = "https://github.com/abhinavcr")
            }
            className={styles.socialcont}
          >
            <img
              alt="Loading..."
              src={Images.githublogo}
              className={styles.socialimg}
            />
            <p className={styles.socialtext}>https://github.com/abhinavcr</p>
          </a>
          <a
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/abhinav-jha-98ba2a243")
            }
            className={styles.socialcont}
          >
            <img
              alt="Loading..."
              src={Images.linkdinlogo}
              className={styles.socialimg}
            />
            <p className={styles.socialtext}>Abhinav Jha</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contactus;
