import styles from './Content.module.css'
import { Certifications } from '../../components/Certification/Certifications';
import { Projects } from '../../components/Projects/Projects';
import { Skills } from '../../components/Skill/Skills';
import { useSections } from '../../hooks/useSections';
import { Experiences } from '../../components/Experience/Experiences';

{/* <li>
    <a href="#certifications" className={styles['headerContent-navContent-a']}>
        <div className={styles['li-line']}></div>
        <span style={{marginLeft:'0.5rem'}}>Certification</span>
    </a>
</li> */}


const navElements = [
    {
        text: "Projects",
        link: "#projects"
    },
    {
        text: "Skills",
        link: "#skills"
    },
    {
        text: "Experience",
        link: "#experience"
    },
    {
        text: "Certifications",
        link: "#certifications"
    }
]

export const Content = () => {

    const {
        projectRef,
        skillRef,
        experienceRef,
        certificationRef,
        closestSection
        } = useSections()


    return (
        <section className={styles['Container-Content']}>
            <div className={styles['Projects-Container']} id='projects'>
                <div className={styles['second-Container']}>
                    <div className={styles['third-Container']}>
                        <header className={styles['header']}>
                            <div className={styles['headerContent']}>
                                <div className={styles['headerContent']}>
                                    <h1 className={styles['headerContent-h1']}>My Experience & Skills</h1>
                                    <p className={styles['headerContent-p']}>Check the projects that I’ve made, and with which technologies were created.</p>
                                    <nav className={styles['headerContent-nav']}>
                                        <ul className={styles['headerContent-navContent']}>
                                            {
                                                navElements.map((item, index) => {
                                                    const isActive = item.text === closestSection
                                                    return (
                                                        <li key={index}>
                                                            <a href={item.link} className={styles['headerContent-navContent-a']}>
                                                                <div className={isActive ? styles['li-lineSelected'] : styles['li-line']}></div>
                                                                <span className={isActive ? styles['li-textSelected'] : styles['li-text']}>{item.text}</span>
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
                            <h1 id='projects' className={styles['projectsTitle']}>Projects</h1>
                            <Projects ref = {projectRef}/>
                            <h1 id='skills' className={styles['projectsTitle']}>Skills</h1>
                            <Skills ref={skillRef}/>
                            <h1 id='experience' className={styles['projectsTitle']}>Experience</h1>
                            <Experiences ref={experienceRef}/>
                            <h1 id='certifications' className={styles['projectsTitle']}>Certification</h1>
                            <Certifications ref={certificationRef}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}