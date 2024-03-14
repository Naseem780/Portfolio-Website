import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naseem</h1>
        
        <p className={styles.description}>I'm a software engineering student and  full-stack developer proficient in Python,Java, React, and JS. Contact me for collaboration</p>
        <a href="mailto:mhdnaseem32@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="heroImage of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};