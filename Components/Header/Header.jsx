import './Header.css'
import Nav from '../Nav/Nav'
import starSvg from '../../src/assets/star-outline-svgrepo-com.svg'
import magicStick from '../../src/assets/magic-stick-svgrepo-com.svg'
import heartShine from '../../src/assets/heart-shine-svgrepo-com.svg'
import handMoney from '../../src/assets/hand-money-svgrepo-com.svg'
import card from '../../src/assets/card-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const Header = ()=>{
    return(
        <section className="landing">
            <Nav/>
            <div className="svg-cont">
                <img src={starSvg} alt="" className="svg-bg" />
                <img src={magicStick} alt="" className="svg-bg" />
                <img src={heartShine} alt="" className="svg-bg" />
                <img src={handMoney} alt="" className="svg-bg" />
                <img src={card} alt="" className="svg-bg" />
                <img src={heartShine} alt="" className="svg-bg" />
            </div>

            {/* header caption */}
            <div className="header-content">
                <h1>
                    The easiest and fastest <br/> way to <span id='green'>Invest</span> in <br/> the crypto Market
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Fuga consequatur hic saepe sit suscipit, error asperiores veniam<br/>
                    iusto perspiciatis rerum! Fugiat illum,<br/> quos aliquid alias nostrum sint perspiciatis ipsum culpa.
                </p>

                <button className="get-started">
                <Link to="/login">
                    Let's get started
                </Link>
                </button>
            </div>
        </section>
    )
}

export default Header