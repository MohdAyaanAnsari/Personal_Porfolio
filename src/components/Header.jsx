import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar.jsx'
import icon from '../../public/images/AyaanAnsari.png'
import Nav from './Nav.jsx'

function Header() {
  const [width, setwidth] = useState("0vw");


  function MenuOpen() {
    setwidth("75vw")
  }
  function MenuClose() {
    setwidth("0vw")
  }
  



  return (
    <>
    <SideBar width = {width} onclick = {MenuClose}/>
      <header>
        <div classNameName="icon">
          <img src={icon} alt="" width="160" />
        </div>
        <Nav/>
        <button className="menubar" onClick={MenuOpen}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </header>
    </>
  )
}

export default Header
