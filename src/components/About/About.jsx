import React from 'react';
import { getImageUrl } from '../../utils';

import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id= "about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="My image" 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Undergraduate Research Assistant
                            </h3>
                            <p>
                                I am a programmer who creates more bugs than the code itself.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Dreamer
                            </h3>
                            <p>
                                I am a programmer who creates more bugs than the code itself.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}