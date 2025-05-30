import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';
import styles from './Navbar.module.css';

interface NavBarItemProps {
    text: string;
    href: string;
    delay: number;
    index: number;
}

export const NavBarItem = ({ text, href, delay, index }: NavBarItemProps) => {
    return (
        <motion.p
            className={styles.navBarP}
            variants={slideIn(delay + index / 10)}
            initial="hidden"
            animate="show"
        >
            <a className={styles.navBarPAnchor} href={href} title={text}>
                {text}
            </a>
        </motion.p>
    );
};