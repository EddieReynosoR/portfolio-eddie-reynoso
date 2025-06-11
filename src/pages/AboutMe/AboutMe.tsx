import { slideRight, smoothAppear } from '../../utils/animations';
import './AboutMe.css';
import {motion} from 'framer-motion';

import { useLanguage } from '../../contexts/LanguageContext';

export const AboutMe = () => {
    const { translation, language, languages } = useLanguage();

    const aboutParagraphs = languages[language].aboutParagraphs || [];

    return(
        <section className='Container'>
            <div className="AboutMe-Container" id='about'>
                <motion.div
                viewport={{once:true}} 
                variants={slideRight({delay: 0})}
                initial='hidden' 
                whileInView='show'
                className='div1'>
                    <picture>
                        <img src="./images/Profile.webp" alt="Imagen" className='fotoPerfil'/>
                    </picture>
                </motion.div>
                <motion.div
                viewport={{once:true}} 
                variants={smoothAppear({delay: 0.2})}
                initial='hidden' 
                whileInView='show'
                className='div2'>
                    <header>
                        <h1 className='aboutme'>{ translation("about") }</h1>
                        <h1 className='name'>Eduardo Reynoso</h1>
                    </header>
                    <section className='AboutMe-Text'>
                        {aboutParagraphs.map((paragraph: string, idx: number) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </section>
                    <motion.div 
                    viewport={{once:true}} 
                    variants={smoothAppear({delay: 0.2})}
                    initial='hidden' 
                    whileInView='show'
                    className='div3'>
                        <section>
                            <ul className='social-Icons'>
                                <li><a href="https://github.com/EddieReynosoR" target='_blank' title='Github'><img src="./images/github-white.svg" alt="Logo" /></a></li>
                                <li><a href="https://www.linkedin.com/in/eduardo-reynoso-8a9590280/" target='_blank' title='Linkedin'><img src="./images/linkedin.svg" alt="Logo" /></a></li>
                            </ul>
                        </section>
                    </motion.div>
                </motion.div>              
            </div>

            <div className="divider-Container"></div>
        </section>
    )
}