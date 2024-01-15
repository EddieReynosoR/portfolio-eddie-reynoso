import {motion} from 'framer-motion'
import { slideIn } from '../../animations'
import styles from './Navbar.module.css'


export const NavBarItem = ({text, href, delay, index}) => {
    return (
        <motion.p
         className={styles.navBarP}
         variants={slideIn({delay: delay + index / 10, direction: 'down'})}
         initial="hidden"
         animate="show"
         >
            <a className={styles.navBarPAnchor} href={href} title={text}>{text}</a>
        </motion.p>
    )
}