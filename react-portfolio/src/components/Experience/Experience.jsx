import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import history from '../../data/history.json';

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{skills.map((skill, id) => {

                    return <div key={id} className={styles.skill}>
                         <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                         <p>{skill.title}</p>
                    </div>
                    
                
                })}
                </div>
                <ul className={styles.history}>
                   {
                       history.map((historyitem, id) => {

                            return <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyitem.imageSrc)} alt={`${historyitem.organisation} LOGO`}></img>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyitem.role}, ${historyitem.organisation}`}</h3>
                                    <p>{`${historyitem.startDate} - ${historyitem.endDate}`}</p>
                                    <ul>{historyitem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>

                        })
                    }
                </ul>
            </div>

        </section>
        
    );
};