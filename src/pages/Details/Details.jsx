import { useParams } from "react-router-dom"
import { projects } from "../../const/constants"
import { Link } from "react-router-dom";

import styles from './Details.module.css'
import { NavDetails } from './../../components/NavBarDetails/NavDetails';
import { Image } from './../../components/ImageProject/Image'
import { useState } from "react";

export const Details = () => {
    const [showImage, setShowImage] = useState(false);
    const [popUpImage, setPopUpImage] = useState("943shots_so.webp");

    const {projectname} = useParams()

    const project = projects.find((item) => item.name === projectname)

    const actualIndex = projects.indexOf(project)


    const handleShowImage = (image) => {
        setShowImage(true);
        setPopUpImage(image)
    }


    return (
        <>
            <main className={styles['project-Main']}>
                <div className={styles['project-Info']}>
                    <section className={styles['project-Header']}>
                        <p className={styles['project-Type']}>{project.type}</p>
                        <h1>{project.name}</h1>
                        <div className={styles['navContainer']}>
                            <NavDetails name={project.name}/>
                        </div>
                    </section>
                    <section className={styles['project-Details']}>
                        <section className={styles['div1']}>
                            <p>
                                Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem. Donec a nulla eu lorem dignissim tincidunt nec eu augue. Etiam consequat aliquam turpis ac varius.Vivamus malesuada vel ex sit amet ultricies.
                            </p>
                        </section>
                        <section className={styles['div2']}>
                            <div>
                                <h2>Tech Stack</h2>
                                <p>Django, Javascript, HTML, CSS</p>
                                <div className={styles['projectLinks-Container']}>
                                    <a href={project.gitHubLink} target="_blank">
                                        <img src="../images/github.svg" alt="Image" />
                                        Ver repositorio
                                    </a>
                                    <a href={project.Link} target="_blank">
                                        <img src="../images/link.svg" alt="Image" />
                                        Ver proyecto
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className={styles['div3']}>
                            <Image src='../images/943shots_so.webp' handleShow = {handleShowImage}/>
                            <Image src='../images/kemishMusic.webp' handleShow = {handleShowImage}/>
                            <Image src='../images/943shots_so.webp' handleShow = {handleShowImage}/>
                            <Image src='../images/943shots_so.webp' handleShow = {handleShowImage}/>
                            <Image src='../images/943shots_so.webp' handleShow = {handleShowImage}/>
                        </section>
                    </section>
                    
                        
                    <figure className={`${styles.popUpImagePreview} ${showImage ? styles.displayBlock : styles.displayNone}`}>
                        <div onClick={() => setShowImage(false)}>
                            <img src={popUpImage} alt="PopUp Image" />
                        </div>
                    </figure>
                    
                    <section className={styles['otherProject-buttons']}>
                        <Link to={actualIndex !== 0 ? `/project/${projects[actualIndex-1].name}` : `/project/${projects[projects.length-1].name}`}>
                            <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>
                        </Link>
                        <Link to={actualIndex !== projects.length-1 ? `/project/${projects[actualIndex+1].name}` : `/project/${projects[0].name}`}>
                            <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 6l-6 6l6 6"></path></svg>
                        </Link>
                    </section>
                </div>
            </main>
        </>
    )
}