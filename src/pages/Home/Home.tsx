import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import './Home.css';

import { useLanguage } from '../../contexts/LanguageContext';

export const Home = () => {
    const { language, translation } = useLanguage();

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
                                <a href="mailto:eduardo_3reynoso@hotmail.com" className='hireMeButton' title='HireMe'><span>{translation("contact") as string}</span></a>
                                <button
                                className='resumeButton'
                                onClick={() => {
                                    const pdf = language === "es"
                                        ? "/docs/CV Reynoso Eduardo ES.pdf"
                                        : "/docs/CV Reynoso Eduardo EN.pdf";
                                    const link = document.createElement('a');
                                    link.href = pdf;
                                    link.download = pdf.split('/').pop() || '';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                >
                                    {translation("cv") as string}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>
        </section>
    )
}