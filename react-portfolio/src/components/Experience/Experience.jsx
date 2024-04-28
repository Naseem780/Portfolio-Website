import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import history from '../../data/history.json';

export const Experience = () => {
    return (
        <section id="experience">
            <h2 >Experience</h2>
            <div>
                <div>{skills.map((skill, id) => {

                    return <div key={id}>
                         <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                         <p>{skill.title}</p>
                    </div>
                    
                
                })}
                </div>
                <ul>
                   {
                       history.map((historyitem, id) => {

                            return <li key={id}>
                                <img src={getImageUrl(historyitem.imageSrc)} alt={`${historyitem.organisation} LOGO`}></img>
                                <div>
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