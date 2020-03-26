import React from 'react';

import closeIcon from '/home/madani/chat-app/client/src/icons/closeIcon.png';
import onlineIcon from '/home/madani/chat-app/client/src/icons/onlineIcon.png';


import './InfoBar.css';

const InfoBar = ({ room }) => {
    return(
    <div className="infoBar">
        <div className="leftInnerContainer ">
           <img className="onlineIcone" src={onlineIcon} alt="online"/>
           <h3>{room}</h3>
        </div>
        
        <div className="rightInnerContainer">
            <a href="/" ><img src={closeIcon} alt="close"/></a>
        </div>
</div>
)
}

export default InfoBar;
