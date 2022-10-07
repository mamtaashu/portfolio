// import React from "react";
import {
    AiFillGithub,
    } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  // import Navbar from "react-bootstrap/Navbar";
  import "./contact.css";
  import {FiPhoneCall} from "react-icons/fi"
  import {SiGmail} from "react-icons/si";
  

function Contact()
{
   return(
    <div style={{display:'flex',flexDirection:'row', justifyContent:'center',flexWrap:'wrap'}} id="contactNavbar"> 
    {/* <h1 style={{marginTop:100, color:"white", textAlign:"center"}}>Contact To Me </h1>  */}
    <div>
    <img width={400} src="https://jorgeartola.com/wp-content/uploads/ja_web2018_contact_callme_09.gif" alt="" />
    </div>
        <div   className="big-div" >
        {/* <p >Meenu Katariya</p> */}

        <div  className="allLogo"  style={{fontFamily:"sans-serif"}}>

        <a href="#"  style={{color:"white"}} > <FiPhoneCall   /></a>

       
         8814811656
      
        </div>
           
             <div className="allLogo">
              
            <a href="mailto:mamtaashu926@gmail.com"   style={{color:"white"}}>
            <SiGmail/>
            </a>
            mamtaashu926@gmail.com
            </div>



           
  
          <div  className="allLogo">
          <a                                                                 
                href="https://github.com/mamtaashu"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              https://github.com/mamtaashu
          </div>




         <div className="allLogo"> 
            <a
                href="https://www.linkedin.com/in/mamta-katariya-540647233/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              https://www.linkedin.com/in/mamta-katariya-540647233/
              </div>
              </div>
    </div>

   )
}
export default Contact