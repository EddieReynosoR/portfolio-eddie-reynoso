import { forwardRef } from 'react'
import styles from './Skills.module.css'
import { Skill } from './Skill'
import { useInView } from 'framer-motion'
import { slideUp } from '../../animations'

// React JS
// TypeScript
// Django
// C# Windows Forms
// SQL Server

const skills = [
    {
        image: './images/react.svg'
    },
    {
        image: './images/csharp.webp'
    },
    {
        image: './images/sqlserver.webp'
    },
    {
        image: './images/django.svg'
    },
    {
        image: './images/typescript.svg'
    },
]

export const Skills = forwardRef((props, ref) => {

    return (
        <article className={styles['skills-container']} ref={ref}>
            {skills.map((skill,index) => {
                return(
                    <Skill key={index} image={skill.image} index={index} 
                    variants={slideUp({delay: 0+index/10} )}
                    initial='hidden' 
                    whileInView='show'
                    viewport={{once:true}}
                    />
                )
            })}
        </article>
    )
})