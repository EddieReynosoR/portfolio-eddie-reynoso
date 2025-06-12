import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes } from 'react';
import { Certification } from './Certification';
import { useLanguage } from '../../contexts/LanguageContext';

type CertificationsProps = HTMLAttributes<HTMLElement>;

export const Certifications = forwardRef<HTMLElement, CertificationsProps>((props, ref: ForwardedRef<HTMLElement>) => {
    const { languages, language } = useLanguage();
    const certifications = languages[language].certificationsList;
    return (
        <article style={{ marginBottom: '3.5em' }} ref={ref} {...props}>
            { certifications.map((certification, index: number) => <Certification key={index} certification={certification} />) }
        </article>
    );
});