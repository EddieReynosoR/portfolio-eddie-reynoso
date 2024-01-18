import { forwardRef } from 'react'
import { Project } from './Project'
import { projectVariants } from '../../animations'

const projects = [
    {
        name: 'BeSporty',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/943shots_so.webp',
        technologies: [
            {
                name: 'Django',
                color: '#005b11'
            },
            {
                name: 'Javascript',
                color: '#ebe700eb'
            },
            {
                name: 'PostgreSQL',
                color: '#008bb9'
            }
        ],
        isDeployed: true
    },
    {
        name: 'Kemish Music',
        description: 'Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti.',
        image: './images/kemishMusic.webp',
        technologies: [
            {
                name: 'C# Winforms',
                color: '#684D9'
            },
            {
                name: 'SQL Server',
                color: '#ED1C24'
            }
        ],
        isDeployed: false
    }
]

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