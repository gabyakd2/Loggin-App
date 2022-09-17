import React from 'react'
import '../style/Login.css'


export function Login() {
 return (
        <div className='login-box'>
            <img className='avatar' src="https://i02.appmifile.com/62_bbs_en/23/01/2021/842639b59d3d1e1de361e2ca4f970283.png" alt="logoavatar" />
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input className='inputUser' type="text" placeholder='Enter Username'/>

                <label>Password</label>
                <input className='inputPass' type="password" placeholder='Enter Password'/>
                <br/>
                <button className='buttonLog'>Log In</button>
            </form>
        </div>
    )
}