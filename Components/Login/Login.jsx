import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = ()=>{
    const [isEmpty, setIsEmpty] = useState(true)
    const [isPassword, setIsPassword] = useState(true)

    const checkEmpty = (e)=>{
        (e.target.value.length) <= 0 ? setIsEmpty(true) : setIsEmpty(false)
    }

    const checkEmptyPassword = (e)=>{
        (e.target.value.length) <= 0 ? setIsPassword(true) : setIsPassword(false)
    }
    return(
        <section className="login-wrapper">
            <form>
                <h1>Welcome Back</h1>
                <label htmlFor="email">Email</label>
                <input id="email-field" name="email" type="email" onChange={checkEmpty}/>
                <label htmlFor="password">Password</label>
                <input id="password-field" name="password" type="password" onChange={checkEmptyPassword}/>
                {isEmpty || isPassword ? <input type='submit' value="Login" disabled/> : <input type='submit' value="Login"/> }
                <Link to="/signup">Don't have an account?</Link>
            </form>
        </section>
    )
}

export default Login