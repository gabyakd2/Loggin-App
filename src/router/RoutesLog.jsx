import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login';



function RoutesLog (){
    return(
        <Routes>
            <Route exact path='/login' element={<Login />} />
        </Routes>
    )
}