import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import styles from '../Certification/Certification.module.css';
import { experiences } from '../../utils/constants';
import { Experience } from './Experience';

type ExperiencesProps = HTMLAttributes<HTMLElement>

export const Experiences = forwardRef<HTMLElement, ExperiencesProps>((props, ref: ForwardedRef<HTMLElement>) => {
    return (
        <article style={{ marginBottom: '3.5em' }} ref={ref} {...props}>
            {
                experiences.map((experience, index) => (
                    <Experience key={index} experience={experience} />
                ))
            }
        </article>
    );
});