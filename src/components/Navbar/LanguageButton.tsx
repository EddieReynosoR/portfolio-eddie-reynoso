import { useLanguage } from "../../contexts/LanguageContext";
import type { AnchorHTMLAttributes } from "react";
import styles from './LanguageButton.module.css';

export const LanguageButton = ( props: AnchorHTMLAttributes<HTMLAnchorElement> ) => {
    const { language, setLanguage } = useLanguage();

    return (
        <a
            className={styles.navBarLanguage}
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            style={{ cursor: 'pointer' }}
            {...props}
        >
            {language === 'en' ? 'ESP' : 'ENG'}
        </a>
    );
}