import { forwardRef } from 'react'
import { useSections } from '../hooks/useSections'
import styles from './Skills.module.css'

// React JS
// TypeScript
// Django
// C# Windows Forms
// SQL Server

export const Skills = forwardRef((props, ref) => {

    return (
        <article className={styles['skills-container']} ref={ref}>
            <div className={styles['div1']}>
                <img src="./react.svg" alt="tech-logo" />
            </div>
            <div className={styles['div2']}>
                <img src="./csharp.png" alt="tech-logo" />
            </div>
            <div className={styles['div3']}>
            <img src="./sqlserver.png" alt="tech-logo" />
            </div>
            <div className={styles['div4']}>
                <img src="./django.svg" alt="tech-logo" />
            </div>
            <div className={styles['div5']}>
                <img src="./typescript.svg" alt="tech-logo" />
            </div>
        </article>
    )
})