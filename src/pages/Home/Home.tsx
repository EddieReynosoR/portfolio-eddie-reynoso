import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import './Home.css';

import { useLanguage } from '../../contexts/LanguageContext';

export const Home = () => {
    const { translation } = useLanguage();

    return (
        <section className='homeContainer'>
            <motion.header 
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="show"
            id="headerTitle"
            className='homeTitle'>
                <div className='developerContainer'>
                    <h1 className='h1Developer1'>SOFTWARE</h1>
                    <h1 className='h1Full'>EDDIE REYNOSO</h1>
                    <h1 className='h1Developer2'>DEVELOPER</h1>
                    <div className='buttons-Container'>
                        <div className='buttons'>
                            <p>{ translation("homeAbout") as string }</p>
                            <div className='homeButtons'>
                                <a href="#" className='hireMeButton' title='HireMe'><span>{translation("contact") as string}</span></a>
                                <button className='resumeButton'>{translation("cv") as string}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>
        </section>
    )
}