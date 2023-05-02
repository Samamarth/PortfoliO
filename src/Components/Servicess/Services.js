import React, { useContext } from "react";
import './Services.css'
import Card from './Card'
import Heartemoji from '../../img/heartemoji.png'
import Glases from '../../img/glasses.png' 
import { themeContext } from "../../Context";
// import Humble from '../../img/humble.png'

const Services = () => {
  //darkmode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div className="services" id="Services">

<div className="l-left">
<span style={{ color: darkMode ? "white" : "" }} >My Awesome</span>
<span>Servicers</span>
<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo, asperiores molestias amet, <br /> ex quis rerum molestiae perferendis debitis dolore adipisci</span>
<div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
</div>

<div className="l-right">

<div>
    <Card
        emoji={Heartemoji}
        heading={'Web Developer'}
        detail={
            <ul>
<li>HTML</li>
<li>CSS</li>
<li>JS</li>
<li>BOOTSTRAP</li>
<li>RESPONSIVE DESINE</li>
            </ul>
        }
    />
</div>

<div style={{top:'5rem', left:'15rem'}}>
<Card
    emoji={Glases}
    heading={'React Developer'}
    detail={
 <ul>
    <li>React JS</li>
    <li>React router</li>
    <li>Reducer</li>
    <li>React Icons</li>
    <li>Axios</li>
    <li>Bootstrap</li>
 </ul>       
    }
/>
</div>
</div>

      </div>
    </div>
  )
}

export default Services
