import styles from './Navbar.module.css';
import { NavBarItem } from './NavbarItem';
import { slideIn } from '../../utils/animations';
import { motion } from 'framer-motion';

import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageButton } from './LanguageButton';

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
                    text={translation(link.key) as string}
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
                <LanguageButton />
            </motion.p>
        </nav>
    );
};