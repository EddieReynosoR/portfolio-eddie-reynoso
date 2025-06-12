import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import { Experience } from './Experience';
import { useLanguage } from '../../contexts/LanguageContext';

type ExperiencesProps = HTMLAttributes<HTMLElement>

export const Experiences = forwardRef<HTMLElement, ExperiencesProps>((props, ref: ForwardedRef<HTMLElement>) => {
    const { languages, language } = useLanguage();
    const experiences = languages[language].experienceList;

    return (
        <article style={{ marginBottom: '3.5em' }} ref={ref} {...props}>
            {
                experiences.map((experience, index: number) => (
                    <Experience key={index} experience={experience} />
                ))
            }
        </article>
    );
});