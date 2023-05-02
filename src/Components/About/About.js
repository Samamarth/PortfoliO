import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./about.css";
import Card from "../Servicess/Card";
import Educationimg from "../../img/education.png";

const About = () => {
   //darkmode
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
<div className="container" id="About">

  <div className="a-left">
  <div className="a-knowme">
    <span style={{color: darkMode? 'white' : ''}}>Get To Know</span>
    <span>About Me</span>
    <span>Hi, I'm Sathawara Vishal, an engineer and React JS developer. I've worked on a variety of projects. and I'm also familiar with Bootstrap, React redux, React router and Material UI. When I'm not coding, I enjoy exploring new technologies and spending time with my family and friends. My goal is to continue growing my career in web development and work on exciting projects.</span>
    
    <div className='blur' style={{background:'rbg(238 210 255) '}}></div>

{/* blur effect div */}
<div className='blur' 
style={{
    background:'#C1F5FF',
    top:'17rem',
    width:'25rem',
    height:'11rem',
    left:'-9rem'
    }}> </div> 

    </div>
  </div>


  <div className="a-right">
    <div>
      <Card
emoji={Educationimg}      
heading={'Education'}
detail={'B.E in Elecrical engineering From SVIT Vasad'}
      />
    </div>
    <div>
      <Card 
emoji={Educationimg}      
heading={'Education'}
detail={'D.E in Elecrical engineering From TFGP Adipur'}
      />
    </div>
    <div>
      <Card
emoji={Educationimg}      
heading={'Training React Js'}
detail={'At Elsner Lerning & Developement Institute initiated by Elsner Technologies pvt ltd. Ahemdabad'}
      />
    </div>
    <div>
      <Card
emoji={Educationimg}      
heading={'Projects'}
detail={'3+ Completed Project'}
      />
    </div>
   

  </div>
</div>
  );
};

export default About;
