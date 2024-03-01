import './Main.css'
import SideBar from '../SideBar/SideBar'
import { Link } from 'react-router-dom'
import moneyImage from '../../../src/assets/money-svgrepo-com.svg'
import trophyImage from '../../../src/assets/trophy-svgrepo-com.svg'
import walletImage from '../../../src/assets/wallet-svgrepo-com.svg'
import { FaDownload, FaUpload, FaMoneyBill } from 'react-icons/fa6'

const Main = () => {
  return (
    <section className='dashboard-wrapper'>
        <SideBar active={0} />
        <div className='main-content'>
            <div className="page-details">
                <h1>Dashboard</h1>
                <p>User &gt; Dashboard</p>
            </div>
            <div className="tradeview"></div>
            <div className="action-btns-wrapper">
                <Link> <FaDownload/> Deposit</Link>
                <Link><FaUpload/>Invest</Link>
                <Link> <FaMoneyBill/> Withdraw</Link>
            </div>
            <div className="account-details-wrapper">
                <div className='account-detail'>
                    <img src={walletImage} />
                    <div>
                        <p>Balance</p>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className='account-detail'>
                    <img src={moneyImage} />
                    <div>
                        <p>Profits</p>
                        <h3>$10</h3>
                    </div>
                </div>

                <div className='account-detail'>
                    <img src={trophyImage}/>
                    <div>
                        <p>Invested amount</p>
                        <h3>$20</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main