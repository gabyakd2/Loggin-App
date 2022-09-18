import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions'
import { useNavigate } from "react-router-dom";
import '../style/Login.css'


export function Login() {
    const dispatch = useDispatch()
    const history = useNavigate()

    const [ input, setInput ] = useState({
        email: '',
        password: ''
    })
    const usersAcc = useSelector(state => state.users)
    //console.log(usersAcc[2].password, 'CONSTRASEÑAAAAAAA')
    
    const userEmailFiltered = usersAcc.filter(el => el.email === input.email)
    //const userPasswordFiltered = usersAcc.filter(el => el.password === input.password)


    console.log(userEmailFiltered,'EMAIL')
    //console.log(userPasswordFiltered,'PASSWORD')

    
    useEffect(() =>{
        dispatch(getUsers())
    },[dispatch])

    function handleLogin(){
        if(userEmailFiltered.length > 0){
            if(input.password === usersAcc.password){ //CREO QUE EL ERROR ESTA ACA PORQUE USERSACC.PASS ES NUMERO Y EL INPUT.PASS ES STRING,
                                                        //Y AL SER ESTRICTAMENTE IGUAL CHOCAN EN LOS TIPOS DE DATOS 
                alert('CUENTA FUNCIONANDO!')
                //history.push('/home')
            }else{
                alert('Contraseña incorrecta')
            }
        }else{
            alert('Cuenta inexistente')
        }
        //console.log(data.password,'HOLAAAAAA')
    }

    function handleInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        //console.log(input.password, 'estado')
    }


 return (
        <div className='login-box'>
            <img className='avatar' src="https://i02.appmifile.com/62_bbs_en/23/01/2021/842639b59d3d1e1de361e2ca4f970283.png" alt="logoavatar" />
            <h1>Login</h1>
            <form onSubmit={(e) => handleLogin(e)}>
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
                <button className='buttonLog' >Log In</button>
            </form>
        </div>
    )
}