import React from 'react'
import Techstack from './About/Techstack'
import Toolstack from './About/Toolstack'

function Tech() {
  return (
    <div id="techNavbar">
       <h1 className="project-heading">
          Teck <strong className="purple">Stack </strong>
        </h1>

        <Techstack/>

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
         <h1 className="project-heading">
          Tools <strong className="purple">Use </strong>
        </h1>
        <Toolstack/>
    </div>
  )
}

export default Tech
