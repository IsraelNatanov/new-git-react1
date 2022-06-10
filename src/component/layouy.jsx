import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLay from './headerLay'

export default function Layouy() {
  return (
    <React.Fragment>
        <HeaderLay />
        <Outlet/>
    </React.Fragment>
  )
}
