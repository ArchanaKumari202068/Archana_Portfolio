import React from 'react'
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import TypingEffect from '../Typeeffect/Typeeffect'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="container" id='Home'>
    <div className="greeting_name">
        <h1>Hi,I'm<br /> Archana kumari
        </h1>
    </div>
    <div className="typingeffect">
        <div className="typo">
        <TypingEffect />
    </div>
    {/* <div class="text-box">
        <div class="fixed-text">I am a</div>
        <div class="animate-text">
          <div>
            <span>Just getting started</span>
            <span>Front-end Developer</span>
            <span>Django Developer</span>
            
           </div>	
        </div>

    </div> */}
    </div>
    
    <div className="contact-icons">
        <FaLinkedin/>
        <FaGithubSquare/>
        <SiGmail/>
        </div>
    </div>
  )
}

export default Home