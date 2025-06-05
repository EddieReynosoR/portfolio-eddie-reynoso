import { IExperience } from '../../utils/types';
import styles from '../Certification/Certification.module.css';

export const Experience = ({ experience } : { experience: IExperience }) => {
    return (
        <div className={styles['article-Container']}>
            <header className={styles['article-Header']}>
                <span className={styles['article-HeaderText']}>{experience.date}</span>
            </header>
            <div className={styles['article-Content']}>
                <h3 className={styles['article-Titles']}>
                    <div>
                        <a className={styles['article-TitleAnchor']} href="">
                            <span>{experience.role}</span>
                            <img className={styles['image-Link']} src="./images/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        <h4 className={styles['article-Subtitle']}>{experience.company}</h4>
                    </div>
                </h3>
                <p className={styles['article-p']}>
                    {experience.description}
                </p>
                <ul className={styles['article-List']}>
                    {
                        experience.technologies.map((tech, index) => (
                            <li key={index} style={{ marginRight: '0.375rem', marginTop: '0.5rem' }}>
                                <div className={styles['article-ListItem']}><span>{tech}</span></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}