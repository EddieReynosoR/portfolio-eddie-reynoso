import { IExperience } from '../../utils/types';
import styles2 from './Experience.module.css';

export const Experience = ({ experience } : { experience: IExperience }) => {
    return (
        <div className={styles2.experience}>
            <div className={styles2.experienceContent}>
                <div className={styles2.experienceImage}>
                    <img src={`./images/${experience.companyLogo}`} alt={`${experience.company} logo`} />
                </div>
                <div>
                    {
                        experience.roles.map((role, index) => (
                            <div key={index} style={{ marginBottom: '0.5rem' }}>
                                <p className={styles2.experienceDate}>{role.date}</p>
                                <div className={styles2.experienceTitleContainer}>
                                    <h3 className={styles2.experienceTitle}>{role.role}</h3>
                                    <p className={styles2.experienceCompany}>{experience.company}</p>
                                </div>
                                <div className={styles2.experienceDescriptionContainer}>
                                    <div className={styles2.experienceDescription}>
                                        <span className={styles2.experienceDescriptionLabel}>Description: </span>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {role.descriptions.map((desc, descIndex) => (
                                                <span style={{ marginBottom: '0.5rem' }} key={descIndex}>{desc}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <ul className={styles2['tech-List']}>
                                    {experience.technologies.map((tech, index) => (
                                        <li key={index} style={{ marginRight: '0.375rem', marginTop: '0.5rem' }}>
                                            <div className={styles2['tech-ListItem']}><span>{tech}</span></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}