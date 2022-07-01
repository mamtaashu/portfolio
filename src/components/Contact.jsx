import React from "react";
import {
    AiFillGithub,
    } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import Navbar from "react-bootstrap/Navbar";
  import "./contact.css";
  import {FiPhoneCall} from "react-icons/fi"
  import {SiGmail} from "react-icons/si";

function Contact()
{
   return(
    <>  
        <div   className="big-div" >
        {/* <p >Meenu Katariya</p> */}
        
        <div  className="allLogo">

        <a href="#"  style={{color:"white"}} > <FiPhoneCall   /></a>

       
         9518058531
      
        </div>
           
             <div className="allLogo">
              
            <a href="mailto:meenukatariya2330@gmail.com"   style={{color:"white"}}>
            <SiGmail/>
            </a>
            meenukatariya2330@gmail.com
            </div>



           
  
          <div  className="allLogo">
          <a                                                                 
                href="https://github.com/MeenuKatariya"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              https://github.com/MeenuKatariya
          </div>




         <div className="allLogo"> 
            <a
                href="https://www.linkedin.com/in/meenu-katariya/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              https://www.linkedin.com/in/meenu-katariya/
              </div>
              </div>
    </>

   )
}
export default Contact