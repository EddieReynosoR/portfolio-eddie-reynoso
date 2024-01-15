import { forwardRef } from 'react'
import { useSections } from '../hooks/useSections'
import styles from './Project.module.css'

export const Projects = forwardRef((props, ref) => {

    return(
        <article className={styles['project-Container']} ref={ref}>
            <img src="./943shots_so.jpg" alt="Project image" />
            <section className={styles['project-Info']}>
                <h3 className={styles['project-Title']}>Project</h3>
                <p className={styles['project-Desc']}>Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.</p>
                <ul className={styles['project-ListTag']}>
                    <li className={styles['project-Tags']}>
                        <img src="./Django-Logo.png" alt="Tag Image" />
                        <span>Django</span>
                    </li>
                </ul>
                
                <div className={styles['project-Details']}>
                    <a href="/" className={styles['project-Links']}><img src="./github-white.svg" alt="Logo" />Github</a>
                    <a href="/" className={styles['project-Links']}>View details</a>
                </div>
                
            </section>
        </article>
    )
})