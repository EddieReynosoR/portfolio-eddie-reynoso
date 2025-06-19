import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import styles from './Skills.module.css';
import { Skill } from './Skill';
import { slideUp } from '../../utils/animations';

interface SkillItem {
    image: string;
};

const skills: SkillItem[] = [
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
    {
        image: './images/java.svg'
    },
    {
        image: './images/android.svg'
    },
    {
        image: './images/dotnet.svg'
    },
    {
        image: './images/spring.svg'
    },
    {
        image: './images/angular.svg'
    }
];

type SkillsProps = HTMLAttributes<HTMLElement>

export const Skills = forwardRef<HTMLElement, SkillsProps>((props, ref: ForwardedRef<HTMLElement>) => {
    return (
        <article className={styles['skills-container']} ref={ref} {...props}>
            {skills.map((skill, index) => (
                <Skill
                    key={index}
                    image={skill.image}
                    index={index}
                    variants={slideUp({ delay: 0 + index / 10 })}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                />
            ))}
        </article>
    );
});