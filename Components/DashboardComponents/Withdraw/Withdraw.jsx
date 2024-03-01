import './Withdraw.css'
import SideBar from '../SideBar/SideBar'
import { FaArrowRightArrowLeft, FaX } from 'react-icons/fa6'
import { useState } from 'react'



const Withdraw = () => {
    const [isPopUp, setIsPopUp] = useState(false)

    const closePopUp = ()=>{
        setIsPopUp(false)
    }

    const openPopUp = ()=>{
        setIsPopUp(true)
    }


    return (
        <div className='dashboard-wrapper'>
            <SideBar active={1}/>
            <div className="withdraw-content">
                <div className={isPopUp ? "page-details blur" : "page-details"}>
                    <h2>Withdrawal</h2>
                    <p id='breadcrumb'>User &gt; withdraw</p>
                </div>
                
                <div className={isPopUp ? "account-details blur" : "account-details"}>
                    <div className="balance-details">
                        <p>My Wallet</p>
                        <h3 id='wallet-balance'>$20</h3>
                        <button className='withdraw-profit' onClick={openPopUp}>
                            <FaArrowRightArrowLeft/>
                            withdraw
                        </button>
                    </div>

                    <div className="balance-details">
                        <p>My Bonus</p>
                        <h3 id='wallet-balance'>$0</h3>
                        <button className='withdraw-bonus'>
                            <FaArrowRightArrowLeft/>
                            withdraw
                        </button>
                    </div>
                </div>

                {/* popup payment */}
                <div className={isPopUp ? "popup open" : "popup"}>
                    <FaX onClick={closePopUp}/>
                    <p>Withdraw funds</p>
                    <form>
                        <label htmlFor='amount'>Amount($)</label>
                        <input type='number' id='amount'/>
                        
                        <label htmlFor='payment-method'>Payment Method</label>
                        <input type='text' id='payment-method' value="Usdt" disabled/>

                        <label htmlFor='payment-address'>Usdt Address</label>
                        <input type='text' id='payment-address'/>

                        <input type="submit" id='proceed-btn' value="Proceed"/>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Withdraw