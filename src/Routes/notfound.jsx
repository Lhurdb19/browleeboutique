import React from 'react';
import { FcHome } from "react-icons/fc";

function Notfound() {
  return (
    <div className='notfound-container'>
        <h1>404 Error</h1>  
        <div class="text">
        <FcHome className='home-icon'/>
         <a href="/"> GO BACK HOME</a>
    </div>
    </div>
  )
}

export default Notfound;
