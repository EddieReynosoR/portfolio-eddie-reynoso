import { slideRight, smoothAppear } from '../../animations'
import './AboutMe.css'
import {motion} from 'framer-motion'

export const AboutMe = () => {
    return(
        <section className="AboutMe-Container" id='about'>
            <motion.div
            viewport={{once:true}} 
            variants={slideRight({delay: 0})}
            initial='hidden' 
            whileInView='show'
            className='div1'>
                <picture>
                    <img src="./images/default.jpg" alt="Imagen" className='fotoPerfil'/>
                </picture>
            </motion.div>
            <motion.div
            viewport={{once:true}} 
            variants={smoothAppear({delay: 0.2})}
            initial='hidden' 
            whileInView='show'
            className='div2'>
                <header>
                    <h1 className='aboutme'>About Me</h1>
                    <h1 className='name'>Eduardo Reynoso</h1>
                </header>
                <section className='AboutMe-Text'>
                    <p>
                        Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem. Donec a nulla eu lorem dignissim tincidunt nec eu augue. Etiam consequat aliquam turpis ac varius.Vivamus malesuada vel ex sit amet ultricies.
                    </p>
                    <p>
                        Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem. Donec a nulla eu lorem dignissim tincidunt nec eu augue. Etiam consequat aliquam turpis ac varius.Vivamus malesuada vel ex sit amet ultricies.
                    </p>
                    <p>
                        Sed ut justo lectus. Aliquam condimentum risus nisl. Suspendisse potenti. Fusce quis suscipit erat, quis sodales eros. Vestibulum ac mi sem. Donec a nulla eu lorem dignissim tincidunt nec eu augue. Etiam consequat aliquam turpis ac varius.Vivamus malesuada vel ex sit amet ultricies.
                    </p>
                </section>
            </motion.div>
            <motion.div 
            viewport={{once:true}} 
            variants={smoothAppear({delay: 0.2})}
            initial='hidden' 
            whileInView='show'
            className='div3'>
                <section>
                    <ul className='social-Icons'>
                        <li><a href="https://github.com/EddieReynosoR" target='_blank' title='Github'><img src="./images/github.svg" alt="Logo" /></a></li>
                        <li><a href="https://www.linkedin.com/in/eduardo-reynoso-rosales-8a9590280/" target='_blank' title='Linkedin'><img src="./images/linkedin.svg" alt="Logo" /></a></li>
                    </ul>
                </section>
            </motion.div>
        </section>
    )
}