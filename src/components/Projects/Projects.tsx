import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import { Project } from './Project';
import { projectVariants } from '../../utils/animations';
import { projects } from '../../utils/constants';

type ProjectsProps = HTMLAttributes<HTMLElement>

export const Projects = forwardRef<HTMLElement, ProjectsProps>((props, ref: ForwardedRef<HTMLElement>) => {
    return (
        <section ref={ref} {...props}>
            {
                projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        isDeployed={project.isDeployed}
                        variants={projectVariants}
                        initial='hidden'
                        whileInView='show'
                    />
                ))
            }
        </section>
    );
});