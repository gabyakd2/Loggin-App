import React, {useEffect}from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getUsers, getUsersEmail } from '../actions'
import Cookies from "universal-cookie";
import '../style/Home.css'


function Home (){
    const cookies = new Cookies();
    const emailCookies = cookies.get("userEmail")
    const user = useSelector(state=> state.users)
    const filter = user.filter(el => el.email === emailCookies)
    console.log("filter",filter)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getUsers())
        dispatch(getUsersEmail(cookies.get("userEmail")))
    },[dispatch])
    
    return(
        <div>
            <h1>LOGGIN APP</h1>
            {
                filter.length ? filter.map((el,i) => {
                    return (
                        <div key={i}>
                            <h2 className="tittle">¡Welcome {el.user}, a pleasure to have you again!</h2>
                            <div className="container">
                                <h3 className="userName"><u>{el.user}</u></h3>
                                <img src={el.image} alt="avatar" />
                                <h3 className="piUsername">Personal Information</h3>
                                <div className="subPiUsername">
                                    <h4>Age: {el.age}</h4>
                                    <h4>Birthplace: {el.birthplace}</h4>
                                    <h4>Residence: {el.residence}</h4>
                                    <h4>Porfile: {el.rol}</h4>
                                </div>
                                    <button className="logout"><Link className="linkh" to='/'>Logout</Link></button>
                            </div>
                        </div>
                    )
                }) 
                : 
                <div className="noInfo">
                    <h2>To see the information, you must first log in.</h2>
                    <button><Link className='linkNoInfo' to='/'>Go to the loggin</Link></button>
                    <br />
                    <img src="https://st2.depositphotos.com/1001911/7273/v/450/depositphotos_72736407-stock-illustration-pug-dog.jpg" alt="logo404" />
                </div>
            }
        </div>
    )
}

export { Home }
