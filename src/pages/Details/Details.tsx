import { useParams } from "react-router-dom";
import { projects } from "../../utils/constants";
import { Link } from "react-router-dom";

import styles from './Details.module.css';
import { NavDetails } from '../../components/NavBarDetails/NavDetails';
import { Image } from '../../components/ImageProject/Image';
import { useEffect, useState } from "react";

import {motion, useAnimationControls, type AnimationControls} from 'framer-motion';
import { fadeInDetails } from "../../utils/animations";

import { useLanguage } from "../../contexts/LanguageContext";

import { LanguageButton } from "../../components/Navbar/LanguageButton";

export const Details = () => {
    const [showImage, setShowImage] = useState<boolean>(false);
    const [popUpImage, setPopUpImage] = useState<string>("943shots_so.webp");

    const { projectname } = useParams<{ projectname: string }>();

    const project = projects.find((item) => item.name === projectname);

    const actualIndex: number = project ? projects.indexOf(project) : -1;

    const handleShowImage = (image: string) => {
        setShowImage(true);
        setPopUpImage(image);
    };

    const control: AnimationControls = useAnimationControls();

    useEffect(()=>{
        control.start('show')
    }, [project, control]);

    if (!project) {
        return <div>Project not found</div>
    }

    const { translation, language, languages } = useLanguage();
    
    const projectData = languages[language].projectsList.find((item) => item.name == projectname);

    if (!projectData) {
        return <div>Project not found</div>
    }

    return (
        <>
            <main className={styles['project-Main']}>
                <motion.div 
                    className={styles['project-Info']}
                    variants={fadeInDetails(0.2)}
                    initial='hidden'
                    animate={control}>
                    <section className={styles['project-Header']}>
                        <p className={styles['project-Type']}>{ projectData.type }</p>
                        <div className={styles['project-Title']}>
                            <h1>{ project.name }</h1>
                            <LanguageButton style={{ color: "black" }} />
                        </div>
                        <div className={styles['navContainer']}>
                            <NavDetails name={ project.name }/>
                        </div>
                    </section>

                    <section className={styles['project-Details']}>
                        <section className={styles['div1']}>
                            <p>
                                { projectData.description }
                            </p>
                        </section>
                        <section className={styles['div2']}>
                            <div className={styles['project-properties']}>
                                <div>
                                    <h2>{ translation("techStack") as string }</h2>
                                    <p>{ project.technologies.map(t => t.name).join(", ") }</p>
                                </div>
                                <div className={styles['projectLinks-Container']}>
                                    <a href={project.gitHubLink} target="_blank">
                                        <img src="../images/github.svg" alt="Image" />
                                        { translation("repository") as string }
                                    </a>
                                    {
                                        project.isDeployed ?? <a href={project.link} target="_blank">
                                        <img src="../images/link.svg" alt="Image" />
                                        { translation("viewProject") as string }
                                    </a>
                                    }                                  
                                </div>
                            </div>
                        </section>
                        <section className={styles['div3']}>
                            {
                                project.images.map((imageSrc, i) => {
                                    return (
                                        <Image key={i} src={`../images/${imageSrc}`} handleShow = {handleShowImage}/>
                                    );
                                })
                            }
                        </section>
                    </section>   

                    <figure className={`${styles.popUpImagePreview} ${showImage ? styles.displayBlock : styles.displayNone}`}>
                        <div onClick={() => setShowImage(false)}>
                            <img src={popUpImage} alt="PopUp Image" />
                        </div>
                    </figure> 

                    <section className={styles['otherProject-buttons']}>
                        <Link
                            to={
                                actualIndex !== 0
                                    ? `/project/${projects[actualIndex - 1].name}`
                                    : `/project/${projects[projects.length - 1].name}`
                            }
                            onClick={() => control.set('hidden')}
                        >
                            <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>
                        </Link>
                        <Link
                            to={
                                actualIndex !== projects.length - 1
                                    ? `/project/${projects[actualIndex + 1].name}`
                                    : `/project/${projects[0].name}`
                            }
                            onClick={() => control.set('hidden')}
                        >
                            <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>
                        </Link>
                    </section>
                </motion.div>
            </main>
        </>
    )
}