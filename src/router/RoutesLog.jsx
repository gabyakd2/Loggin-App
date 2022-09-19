import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login';
import { Home } from '../components/Home'



function RoutesLog (){
    return(
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
        </Routes>
    )
}


export { RoutesLog }


