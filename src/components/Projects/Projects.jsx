import { forwardRef } from 'react'
import { Project } from './Project'
import { projectVariants } from '../../animations'
import { projects } from '../../const/constants'


export const Projects = forwardRef((props, ref) => {

    return(
        <section ref={ref}>
            {
                projects.map((project, index) => {
                    return (
                        <Project key={index} name={project.name} description={project.description} image={project.image} technologies={project.technologies} isDeployed={project.isDeployed}
                        variants={projectVariants}
                        initial='hidden' whileInView='show'
                        />
                    )
                })
            }
        </section>
    )
})