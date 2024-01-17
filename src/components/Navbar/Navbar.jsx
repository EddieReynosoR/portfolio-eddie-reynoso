import styles from './Navbar.module.css'
import { NavBarItem } from './NavbarItem'

const links = [
    {
        text: 'About me',
        href: '#about'
    },
    {
        text: 'Experience',
        href: '#expecience'
    },
    {
        text: 'Projects',
        href: '#projects'
    },
]

export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            {links.map((link,i) => {
                return (
                    <NavBarItem  key={i} text={link.text} href={link.href} index={i} delay={0.8}/>
                )
            })}
        </nav>
    )
}