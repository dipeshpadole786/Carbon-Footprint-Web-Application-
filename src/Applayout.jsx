import React from 'react'
import { Header } from './components/UI/Header'
import { Footer } from './components/UI/Footer'
import { Outlet } from "react-router-dom"
export const Applayout = () => {
    return (
        <div >
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}
