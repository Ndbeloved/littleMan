import { Link } from 'react-router-dom'
import './SignUp.css'
import { useEffect, useRef, useState } from 'react'

const SignUp = ()=>{
    const [isEmpty, setIsEmpty] = useState(true)
    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)
    //checks if any of the input fields is empty before removing disabled attribute from submit button
    const checkEmpty = ()=>{
        (input1.current.value <= 0 || input2.current.value <= 0 || input3.current.value <= 0) ? setIsEmpty(true) : setIsEmpty(false)
    }

    return(
        <section className="login-wrapper">
            <form>
                <h1>Let's get you<br/> started</h1>
                <label htmlFor="username">Username</label>
                <input id="username-field" name="username" type="text" onChange={checkEmpty} ref={input1}/>
                <label htmlFor="email">Email</label>
                <input id="email-field" name="email" type="email" onChange={checkEmpty} ref={input2}/>
                <label htmlFor="password">Password</label>
                <input id="password-field" name="password" type="password" onChange={checkEmpty} ref={input3}/>
                {isEmpty ? <input type='submit' value="Signup" disabled/> : <input type='submit' value="Signup"/> }
                <Link to="/login">Already have an account?</Link>
            </form>
        </section>
    )
}

export default SignUp