import { motion, MotionProps } from 'framer-motion';
import styles from './Project.module.css';
import { Link } from 'react-router-dom';

interface Technology {
    name: string;
    color: string;
}

interface ProjectProps extends MotionProps {
    name: string;
    description: string;
    technologies: Technology[];
    image: string;
    isDeployed: boolean;
}

export const Project = ({
    name,
    description,
    technologies,
    image,
    isDeployed,
    ...rest
}: ProjectProps) => {
    return (
        <motion.article
            {...rest}
            viewport={{ once: true }}
            className={styles['project-Container']}
        >
            <Link to={`/project/${name}`}>
                <img src={image} alt="Project image" />
                <section className={styles['project-Info']}>
                    <h3 className={styles['project-Title']}>{name}</h3>
                    <p className={styles['project-Desc']}>{description}</p>
                    <ul className={styles['project-ListTag']}>
                        {technologies.map((tech, index) => (
                            <li
                                key={index}
                                className={styles['project-Tags']}
                                style={{ backgroundColor: tech.color }}
                            >
                                <span>{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={styles['project-Details']}>
                        See details
                        <img src="./images/linkwhite.svg" alt="linkImage" />
                    </div>
                </section>
            </Link>
        </motion.article>
    );
};