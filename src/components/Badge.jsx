import React from 'react';
import './styles/Badge.css';
import conflogo from '../assets/images/badge-header.svg';


const Badge = ({ firstName, lastName, twitter, jobTitle, avatarUrl }) => (
    
    <div className="Badge">
        <div className="Badge__header">
            <img src={ conflogo } alt="Logo banner"/>
        </div>
        <div className="Badge__section-name">
            <img className="Badge__avatar" src={avatarUrl} alt="Avatar"/>
            <h1> {firstName} <br/> {lastName} </h1>
        </div>
        <div className="Badge__section-info">
            <div><h4>{jobTitle}</h4></div>
            <div>@{twitter}</div>
        </div>
        <div className="Badge__footer">
            #platziconf
        </div>
    </div>
    
);

export default Badge;