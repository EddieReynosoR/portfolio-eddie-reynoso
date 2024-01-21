import { useParams } from "react-router-dom"
import { projects } from "../../const/constants"

import styles from './Details.module.css'

export const Details = () => {
    const {projectname} = useParams()

    const project = projects.find((item) => item.name === projectname)


    return (
        <>
            <main className={styles['project-Main']}>
                <section>
                    <h1>{project.name}</h1>
                </section>
            </main>
        </>
    )
}