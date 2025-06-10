import styles from './Navbar.module.css';
import { NavBarItem } from './NavbarItem';
import { slideIn } from '../../utils/animations';
import { motion } from 'framer-motion';

import { useLanguage } from '../../contexts/LanguageContext';

const linksKeys = [
    {
        key: 'about',
        href: '/#about'
    },
    {
        key: 'experience',
        href: '/#experience'
    },
    {
        key: 'projects',
        href: '/#projects'
    }
];

export const NavBar = () => {
    const { translation, language, setLanguage } = useLanguage();

    return (
        <nav className={styles.navBar}>          
            {linksKeys.map((link, i) => (
                <NavBarItem
                    key={i}
                    text={translation(link.key)}
                    href={link.href}
                    index={i}
                    delay={0.8}
                />
            ))}


            <motion.p
                className={styles.navBarP}
                variants={slideIn(0.8 + linksKeys.length / 10)}
                initial="hidden"
                animate="show"
            >
                <a
                    className={styles.navBarLanguage}
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    style={{ cursor: 'pointer' }}
                >
                    {language === 'en' ? 'ESP' : 'ENG'}
                </a>
            </motion.p>
        </nav>
    );
};