import './HowItWorks.css'
import womanPhone2 from '../../src/assets/woman-phone2.jpeg'


const HowItWorks = ()=>{
    return(
        <section className="how-it-works-wrapper">
            <div className='content-wrapper'>
                <h2>How <span>FlowVest</span><br/> works</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minus facilis nesciunt,
                    cupiditate ex error voluptatem minima rerum,
                    quae, in dolor perferendis. Suscipit blanditiis necessitatibus aliquam eum dolore nesciunt distinctio.
                </p>


                {/* list process wrapper */}
                <div className='list-process-wrapper'>
                    <div className='process-wrapper'>
                        <div className="process-image">
                            <div></div>
                        </div>
                        <div className="content">
                            <h3>Create account</h3>
                            <p>
                                Start by clicking on the signup button on the Navigation Menu
                                to create a free account.
                            </p>
                        </div>
                    </div>

                    <div className='process-wrapper'>
                        <div className="process-image">
                            <div></div>
                        </div>
                        <div className="content">
                            <h3>Link your Bitcoin wallet</h3>
                            <p>
                                Start by clicking on the signup button on the Navigation Menu
                                to create a free account.
                            </p>
                        </div>
                    </div>

                    <div className='process-wrapper'>
                        <div className="process-image">
                            <div></div>
                        </div>
                        <div className="content">
                            <h3>Start investing</h3>
                            <p>
                                Start by clicking on the signup button on the Navigation Menu
                                to create a free account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-wrapper'>
                <img src={womanPhone2} alt="lady with phone" />
            </div>

            
        </section>
    )
}

export default HowItWorks