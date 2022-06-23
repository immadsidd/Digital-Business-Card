import React from 'react';
import Image from '../images/profile.jpeg';


export default function Info(){
    return( 
        <div className='info'>
            <img   src={Image} />
            <h1>Immad Siddiqui</h1>
            <p>Frontend Developer</p>
            <a href='mailto:immadsiddiqui@hotmail.com'><button className='b1'>Email</button></a>
            <a href='https://www.linkedin.com/in/immad-s-35b962184' target='_blank'><button className='b2'>linkedin</button></a>
            </div>
        
    )
  
}

