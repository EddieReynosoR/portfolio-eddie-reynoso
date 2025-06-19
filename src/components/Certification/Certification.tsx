import styles from './Certification.module.css';
import type { ICertification } from '../../utils/types';

export const Certification = ({ certification } : { certification: ICertification }) => {
    return (
        <div className={styles['article-Container']}>
            <header className={styles['article-Header']}>
                <span className={styles['article-HeaderText']}>{certification.date}</span>
            </header>
            <div className={styles['article-Content']}>
                <h3 className={styles['article-Titles']}>
                    <div>
                        <a className={styles['article-TitleAnchor']} href={certification.link} target="_blank">
                            <span>{certification.title}</span>
                            <img className={styles['image-Link']} src="./images/link.svg" alt="link" />
                        </a>
                    </div>
                    <div>
                        <h4 className={styles['article-Subtitle']}>{certification.institution}</h4>
                    </div>
                </h3>
                {certification.description.map((d, index) => (
                    <p key={index} className={styles['article-p']}>
                        {d}
                    </p>
                ))}
                <ul className={styles['article-List']}>
                    {certification.technologies.map((tech, index) => (
                        <li key={index} style={{ marginRight: '0.375rem', marginTop: '0.5rem' }}>
                            <div className={styles['article-ListItem']}><span>{tech}</span></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}