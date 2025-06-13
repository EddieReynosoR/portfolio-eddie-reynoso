import styles from './Content.module.css';
import { Certifications } from '../../components/Certification/Certifications';
import { Projects } from '../../components/Projects/Projects';
import { Skills } from '../../components/Skill/Skills';
import { useSections } from '../../hooks/useSections';
import { Experiences } from '../../components/Experience/Experiences';

import { useLanguage } from '../../contexts/LanguageContext';

const navElements = [
    {
        key: "projects",
        text: "Projects",
        link: "#projects"
    },
    {
        key: "skills",
        text: "Skills",
        link: "#skills"
    },
    {
        key: "experience",
        text: "Experience",
        link: "#experience"
    },
    {
        key: "certifications",
        text: "Certifications",
        link: "#certifications"
    }
];

export const Content = () => {

    const {
        projectRef,
        skillRef,
        experienceRef,
        certificationRef,
        closestSection
        } = useSections();

    const { translation } = useLanguage();

    return (
        <section className={styles['Container-Content']}>
            <div className={styles['Projects-Container']} id='projects'>
                <div className={styles['second-Container']}>
                    <div className={styles['third-Container']}>
                        <header className={styles['header']}>
                            <div className={styles['headerContent']}>
                                <div className={styles['headerContent']}>
                                    <h1 className={styles['headerContent-h1']}>{ translation("experienceSkills") as string }</h1>
                                    <p className={styles['headerContent-p']}>{ translation("projectsP") as string }</p>
                                    <nav className={styles['headerContent-nav']}>
                                        <ul className={styles['headerContent-navContent']}>
                                            {
                                                navElements.map((item, index) => {
                                                    const isActive = item.text === closestSection
                                                    return (
                                                        <li key={index}>
                                                            <a href={item.link} className={styles['headerContent-navContent-a']}>
                                                                <div className={isActive ? styles['li-lineSelected'] : styles['li-line']}></div>
                                                                <span className={isActive ? styles['li-textSelected'] : styles['li-text']}>{translation(item.key) as string}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </header>
                        <div className={styles['projectsContent']}>
                            <h1 id='projects' className={styles['projectsTitle']}>{ translation("projects") as string }</h1>
                            <Projects ref = {projectRef}/>
                            <h1 id='skills' className={styles['projectsTitle']}>{ translation("skills") as string }</h1>
                            <Skills ref={skillRef}/>
                            <h1 id='experience' className={styles['projectsTitle']}>{ translation("experience") as string }</h1>
                            <Experiences ref={experienceRef}/>
                            <h1 id='certifications' className={styles['projectsTitle']} style={{ marginTop: '0' }}>{ translation("certifications") as string }</h1>	
                            <Certifications ref={certificationRef}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};