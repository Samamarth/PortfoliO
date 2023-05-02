import React from 'react'
import FlowtingDiv from './FlowtingDiv'
import './intro.css'
import LinkedIn from '../../img/linkedin.png'
import Github from "../../img/github.png"
import Instragram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
// import Thumbup from '../../img/thumbup.png'
import { themeContext } from "../../Context";
import { useContext } from 'react'

import Glassesemoji from '../../img/glassesimoji.png'

const Intro = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
            <span>Samarth Chaniyara</span>
            <span>React JS Developer in Web Designing And Development, Producting The Quality Work </span>
        </div>

        <button className='button i-button'>Resume</button>

        <div className="i-icons">
        <a href="..">
            <img src={Github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/samarthchaniyara/">
            <img src={LinkedIn} alt="" />
        </a>
        <a href="...">
            <img src={Instragram} alt="" />
        </a>
        </div>          
    </div>


    <div className="i-right">

<img src={Vector1} alt="" />
<img src={Vector2} alt="" />
<img src={Boy} alt="" />
<img src={Glassesemoji} alt="" />
<div style={{top:'-4%', left:'68%'}}>
    <FlowtingDiv/>
</div>

 <div className='blur' style={{background:'rbg(238 210 255) '}}></div>

<div className='blur' 
style={{
    background:'#C1F5FF',
    top:'17rem',
    width:'21rem',
    height:'11rem',
    left:'-9rem'
    }}> </div> 

    </div>
   </div>
  )
} 

export default Intro
