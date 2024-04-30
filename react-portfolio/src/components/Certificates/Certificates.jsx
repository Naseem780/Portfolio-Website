import React from 'react'
import { getImageUrl } from '../../utils';
import Certificate from '../../data/Certificates.json';
import styles from './Certificates.module.css';

export const Certificates = () => {
  return (
    <section id="certificates" className={styles.container}>
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        {Certificate.map((certificate, id) => {
          return (
            <div className="certificate" key={id}>
              <img src={getImageUrl(certificate.imageSrc)} alt={certificate.title} className={styles.certificateImage} />
              
            </div>
          )
        })}
      </div>
    </section>
  )
}