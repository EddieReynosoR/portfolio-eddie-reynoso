import {motion} from 'framer-motion'
import styles from './Project.module.css'
import { Link } from 'react-router-dom'

export const Project = ({name, description, technologies, image, isDeployed, ...rest}) => {
    return (
        <motion.article 
        {...rest}
        viewport={{once:true}}
        className={styles['project-Container']}
        >
            <img src={image} alt="Project image" />
            <section className={styles['project-Info']}>
                <h3 className={styles['project-Title']}>{name}</h3>
                <p className={styles['project-Desc']}>{description}</p>
                <ul className={styles['project-ListTag']}>
                    {
                        technologies.map((tech, index) => {
                            return (
                                <li key={index} className={styles['project-Tags']} style={{backgroundColor: `${tech.color}`}}>
                                    <span>{tech.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <div className={styles['project-Details']}>
                    {isDeployed ? <a href="/" className={styles['project-Links']}>Check Website</a> : <a href="/" className={styles['project-Links']}>Check video</a>}
                    <a href="/" className={styles['project-Links']}><img src="./images/github-white.svg" alt="Logo" />Github</a>
                    <Link to={`/project/${name}`} className={styles['project-Links']}>View details</Link>
                </div>
                
            </section>
        </motion.article>
    )
}