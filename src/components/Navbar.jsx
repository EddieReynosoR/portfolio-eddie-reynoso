import styles from './Navbar.module.css'


export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#about" title='AboutMe'>About me</a></p>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#experience" title='Home'>Experience</a></p>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#projects" title='Projects'>Projects</a></p>
        </nav>
    )
}