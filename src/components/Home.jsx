import './Home.css'

export const Home = () => {
    return (
        <section className='homeContainer'>
            <header className='homeTitle'>
            <h1 className='h1Developer1'>FULL-STACK</h1>
                <div className='developerContainer'>
                    <h1 className='h1Full'>EDDIE REYNOSO</h1>
                    <h1 className='h1Developer2'>DEVELOPER</h1>
                </div>
                <div className='buttons-Container'>
                    <div className='buttons'>
                        <p>Developer passionated about the idea of creating useful applications for the persons.</p>
                        <div className='homeButtons'>
                        <a href="#" className='hireMeButton' title='HireMe'><span>Hire me</span></a>
                        <button className='resumeButton'>Resume</button>
                    </div>
            </div>
                </div>
            </header>
        </section>
    )
}