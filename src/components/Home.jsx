import React, {useEffect}from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getUsersEmail } from '../actions'
import Cookies from "universal-cookie";
import '../style/Home.css'


function Home (){
    const detailUser = useSelector(state => state.detailUser)
    const dispatch = useDispatch()
    const cookies = new Cookies();
    useEffect(() =>{
        dispatch(getUsersEmail(cookies.get("userEmail")))
    },[dispatch])
    console.log(cookies.get("userEmail"))
    console.log(detailUser)
    return(
        <div>
            <h1>LOGGIN APP</h1>
            {
                detailUser.length ? detailUser.map((el,i) => {
                    return (
                        <div key={i}>
                            <h2 className="tittle">¡Welcome {el.user}, a pleasure to have you again!</h2>
                            <div className="container">
                                <img src={el.image} alt="avatar" />
                                <h3 className="userName"><u>{el.user}</u></h3>
                                <h3 className="piUsername">Personal Information</h3>
                                <div className="subPiUsername">
                                    <h4>Age: {el.age}</h4>
                                    <h4>Birthplace: {el.birthplace}</h4>
                                    <h4>Residence: {el.residence}</h4>
                                    <h4>Porfile: {el.rol}</h4>
                                </div>
                            </div>
                        </div>
                    )
                }) : 
                <div>
                    <h2>Para ver la informacion, primero debes loguearte</h2>
                    <Link to='/'>Llevame</Link>
                </div>
            }
        </div>
    )
}

export { Home }