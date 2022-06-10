import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import React from 'react'
import Layouy from './layouy';
import Home from './task/home';
import TextParmas from './textParmas';
import MarketList from './marketList';
import MarketInfo from './marketInfo';
import Login from './login';
import Page404 from './page404';
import Register from './register';
import Google from './google';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layouy />}>
                <Route index element={<Home />} />
                <Route path='/Home' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/taxtParams/:id' element={<TextParmas />}/>
                <Route path='/market' element={<MarketList />}/>
                <Route path='/market/:id' element={<MarketInfo />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/loginGoogle' element={<Google />}/>
                <Route path="/*" element={<Page404 />} />

            </Route>
        </Routes>
    </Router>
  )
}
