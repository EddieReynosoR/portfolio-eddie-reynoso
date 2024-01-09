import './Home.css'

export const Home = () => {
    return (
        <section className='homeContainer'>
            <header className='homeTitle'>
                <h1 className='h1Name'>Hi, I'm Eduardo Reynoso</h1>
                <div className='developerContainer'>
                    <h1 className='h1Full'>FULL-STACK</h1>
                    <h1 className='h1Developer'>DEVELOPER</h1>
                </div>
                <div className='buttons'>
                    <p>I am a developer passionated about the idea of creating useful applications for the persons.</p>
                    <div className='homeButtons'>
                    <a href="#" className='hireMeButton' title='HireMe'><span>Hire me</span></a>
                    <button className='resumeButton'>Resume</button>
            </div>
                </div>
            </header>
        </section>
    )
}