import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import { Experience } from './Experience';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Experience.module.css';
import { IExperience } from '../../utils/types';

type ExperiencesProps = HTMLAttributes<HTMLElement>

export const Experiences = forwardRef<HTMLElement, ExperiencesProps>((props, ref: ForwardedRef<HTMLElement>) => {
    const { languages, language } = useLanguage();
    const experiences = languages[language].experienceList as IExperience[];

    return (
        <article className={styles.experiencesContainer} ref={ref} {...props}>
            {
                experiences.map((experience, index: number) => (
                    <Experience key={index} experience={experience} />
                ))
            }
        </article>
    );
});