import React from 'react';
import './styles/Bade.css';
import conflogo from '../assets/images/badge-header.svg';


const Badge = () => (
    <div className="Badge">
        <div className="Badge__header">
            <img src={ conflogo } alt="Logo banner"/>
        </div>
        <div className="Badge__section-name">
            <img className="Badge__avatar" src="https://lh3.googleusercontent.com/proxy/M0qyLCfbJxfMnaL2RvCv_6dm_W6qLIEEebB-yVzB9fmS-T30RoL1KrGr6tRlX2XjeMCtR-d59qvaG5szwD5YJIl2I_X-mViq-XIqe_tMj48C" alt="Avatar"/>
            <h1>Bryan <br/> Rodríguez</h1>
        </div>
        <div className="Badge__section-info">
            <div><h4>Frontend Engineer</h4></div>
            <div>@bryansrm</div>
        </div>
        <div className="Badge__footer">
            #platziconf
        </div>
    </div>
);

export default Badge;