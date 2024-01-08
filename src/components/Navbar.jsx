import styles from './Navbar.module.css'


export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#" title='Home'>Home</a></p>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#" title='AboutMe'>About me</a></p>
            <p className={styles.navBarP}><a className={styles.navBarPAnchor} href="#" title='Projects'>Projects</a></p>
        </nav>
    )
}