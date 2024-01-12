import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AboutMe = () => {
    return(
        <section className="AboutMe-Container" id='about'>
            <div className='home-Back'>
                {/* <a href="#home">Home</a> */}
            </div>
            <div className='div1'>
                <picture>
                    <img src="./default.jpg" alt="Imagen" className='fotoPerfil'/>
                </picture>
            </div>
            <div className='div2'>
                <header>
                    <h3>About Me</h3>
                    <h1>Eduardo Reynoso</h1>
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
            </div>
            <div className='div3'>
                <section>
                    <ul className='social-Icons'>
                        <li><a href="https://github.com/EddieReynosoR" target='_blank' title='Github'><img src="./github.svg" alt="Logo" /></a></li>
                        <li><a href="https://www.linkedin.com/in/eduardo-reynoso-rosales-8a9590280/" target='_blank' title='Linkedin'><img src="./linkedin.svg" alt="Logo" /></a></li>
                    </ul>
                </section>
            </div>
        </section>
    )
}