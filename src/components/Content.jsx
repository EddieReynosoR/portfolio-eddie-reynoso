import styles from './Content.module.css'
import { Certification } from './Certification';
import { Project } from './Project';

export const Content = () => {
    return (
        <section className={styles['Projects-Container']} id='projects'>
            <div className={styles['second-Container']}>
                <div className={styles['third-Container']}>
                    <header className={styles['header']}>
                        <div className={styles['headerContent']}>
                            <div className={styles['headerContent']}>
                                <h1 className={styles['headerContent-h1']}>My Experience & Skills</h1>
                                <p className={styles['headerContent-p']}>Check the projects that I’ve made, and with which technologies were created.</p>
                                <nav className={styles['headerContent-nav']}>
                                    <ul className={styles['headerContent-navContent']}>
                                    <li>
                                            <a href="" className={styles['headerContent-navContent-a']}>
                                                <div className={styles['li-line']}></div>
                                                <span style={{marginLeft:'0.5rem'}}>Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className={styles['headerContent-navContent-a']}>
                                                <div className={styles['li-line']}></div>
                                                <span style={{marginLeft:'0.5rem'}}>Skills</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className={styles['headerContent-navContent-a']}>
                                                <div className={styles['li-line']}></div>
                                                <span style={{marginLeft:'0.5rem'}}>Experience</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className={styles['headerContent-navContent-a']}>
                                                <div className={styles['li-line']}></div>
                                                <span style={{marginLeft:'0.5rem'}}>Certification</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <div className={styles['projectsContent']}>
                        <h1 className={styles['projectsTitle']}>Projects</h1>
                        <Project/>
                        <h1 className={styles['projectsTitle']}>Skills</h1>
                        <Certification/>
                        <h1 className={styles['projectsTitle']}>Experience</h1>
                        <Certification/>
                        <h1 className={styles['projectsTitle']}>Certification</h1>
                        <Certification/>
                    </div>
                </div>
            </div>
        </section>
    )
}