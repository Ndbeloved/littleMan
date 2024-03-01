import './Faq.css'
import womanPhone from '../../src/assets/woman-phone.jpeg'
import { useState } from 'react'

const Faq = ()=>{
    const [accordion1, setAccordion1] = useState(false)
    const [accordion2, setAccordion2] = useState(false)
    const [accordion3, setAccordion3] = useState(false)

    return(
        <section className='faq-wrapper'>
            <div className="faq-image-wrapper">
                <img src={womanPhone} alt="" />
            </div>
            <div className='faq-content'>
                <h2>Your pathway<br/> to Future<br/> Investments</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto deleniti molestiae,
                    totam nemo nisi saepe, 
                    veniam atque laboriosam, quae maxime adipisci enim! Consequuntur, harum incidunt.
                </p>

                {/* faq */}
                <div className='faq-accord-wrapper'>
                    <h3 onClick={()=>setAccordion1(!accordion1)}>What is Bitcoin  <i className={accordion1 ? 'fa-solid fa-minus' : 'fa-solid fa-add'}></i></h3>
                    <p className= {accordion1 ? 'visible' : 'invisible'}>
                        This is a crypto currency used in completing seamless
                        and fast payments. it relies on the blockchain technology.
                    </p>
                </div>

                <div className='faq-accord-wrapper'>
                    <h3 onClick={()=>setAccordion2(!accordion2)}>How safe is flowVest <i className={accordion2 ? 'fa-solid fa-minus' : 'fa-solid fa-add'}></i></h3>
                    <p className= {accordion2 ? 'visible' : 'invisible'}>
                        In flowVest, we make use of sophisticated algorithms and bots
                        to trade the finacial market, therefore ensuring profit on every trade entered.
                    </p>
                </div>

                <div className='faq-accord-wrapper'>
                    <h3 onClick={()=>setAccordion3(!accordion3)}>How do i gain from FlowVest <i className={accordion3 ? 'fa-solid fa-minus' : 'fa-solid fa-add'}></i></h3>
                    <p className= {accordion3 ? 'visible' : 'invisible'}>
                        In flowVest, we make use of sophisticated algorithms and bots
                        to trade the finacial market, therefore ensuring profit on every trade entered.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Faq