import './WhyChooseUs.css'

const WhyChooseUs = ()=>{
    return(
        <section className='why-choose-us'>
            <div className='why-choose-us-content'>
                <h2>Why choose</h2>
                <h2 id="green">FlowVest</h2>
                <p id="we-provide">In FlowVest we provide...</p>

                <div className="point-wrapper">
                    <div className="counter">1</div>
                    <div className="point">Real-time checkup</div>
                </div>

                <div className="point-wrapper">
                    <div className="counter">2</div>
                    <div className="point">Flexible investments</div>
                </div>

                <div className="point-wrapper">
                    <div className="counter">3</div>
                    <div className="point">Secure and Encrypted</div>
                </div>

                <button id="get-started">
                    Get Started
                </button>
            </div>
            <div className="why-choose-us-image-wrapper">
                <div className='image-cont'></div>
            </div>
        </section>
    )
}

export default WhyChooseUs