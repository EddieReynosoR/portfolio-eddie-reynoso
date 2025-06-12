import styles from './NavDetails.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

import { Link } from 'react-router-dom'
export const NavDetails = ({name} : {name: string}) => {
    const { translation } = useLanguage();

    return (
        <nav className={styles['NavBar-Container']}>
            <Link className={styles['NavBar-Element']} to='/'>Home</Link>
            <svg className={styles['NavBar-SVG']} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg> 
            <Link className={styles['NavBar-Element']} to='/' onClick={() => {
                setTimeout(() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }}>
                { translation("projects") as string }
            </Link>
            <svg className={styles['NavBar-SVG']} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg> 
            <span className={styles['Project-Name']}>{name}</span>
        </nav>
    )
}