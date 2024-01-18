import { forwardRef } from 'react'
import { useSections } from '../../hooks/useSections'
import styles from '../Certification/Certification.module.css'

export const Experiences = forwardRef((props, ref) => {

    return (
        <article style={{marginBottom: 3.5 + 'em' }} ref={ref}>
            <div className={styles['article-Container']}>
                <header className={styles['article-Header']}>
                    <span className={styles['article-HeaderText']}>DECEMBER 2022</span>
                </header>
                <div className={styles['article-Content']}>
                    <h3 className={styles['article-Titles']}>
                        <div>
                            <a className={styles['article-TitleAnchor']} href="">
                                <span>Full-Stack Developer</span>
                                <img className={styles['image-Link']} src="./images/link.svg" alt="link" />
                            </a>
                        </div>
                        <div>
                            <h4 className={styles['article-Subtitle']}>San Diego Global Knowledge University</h4>
                        </div>
                    </h3>
                    <p className={styles['article-p']}>
                        Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem.
                    </p>
                    <ul className={styles['article-List']}>
                        <li style={{marginRight: '0.375rem', marginTop: '0.5rem' }}>
                            <div className={styles['article-ListItem']}><span>Frontend</span></div>
                        </li>
                        <li style={{marginRight: '0.375rem', marginTop: '0.5rem' }}>
                            <div className={styles['article-ListItem']}><span>Backend</span></div>
                        </li>
                        <li style={{marginRight: '0.375rem', marginTop: '0.5rem' }}>
                            <div className={styles['article-ListItem']}><span>Software Engineering</span></div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </article>
    )
})