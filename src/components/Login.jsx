import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUsersEmail } from '../actions'
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import '../style/Login.css'



function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cookies = new Cookies();
    const usersAcc = useSelector(state => state.users)
    const [ input, setInput ] = useState({
        email: '',
        password: ''
    })
    
    const userEmailFiltered = usersAcc.filter(el => el.email === input.email)

    useEffect(() =>{
        dispatch(getUsers())
    },[dispatch])

    function handleLogin(e){
        e.preventDefault()
        if(userEmailFiltered.length){
            if(userEmailFiltered[0].password === input.password){
                cookies.set("userEmail", `${input.email}`, { patch: "/" });
                navigate('/home')
                dispatch(getUsersEmail(input.email))
            }else{
                alert('Contraseña incorrecta')
            }
        }else{
            alert('Correo inexistente')
        }
    }

    function handleInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    


 return (
        <div className='login-box'>
            <img className='avatar' src="https://i02.appmifile.com/62_bbs_en/23/01/2021/842639b59d3d1e1de361e2ca4f970283.png" alt="logoavatar" />
            <h1>Login</h1>
            <form >
                <label>Email</label>
                <input className='inputUser' 
                name='email'
                value={input.email}
                type="text"
                onChange={(e) => handleInput(e)}
                placeholder='Enter Email'
                />

                <label>Password</label>
                <input className='inputPass' 
                name='password' 
                value={input.password}
                type="password"
                onChange={(e) => handleInput(e)}
                placeholder='Enter Password'/>
                <br/>
                <button onClick={(e) => handleLogin(e)} className='buttonLog' >Log In</button>
            </form>
        </div>
    )
}



export { Login }