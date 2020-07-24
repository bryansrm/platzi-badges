import React from 'react';

import header from '../assets/images/badge-header.svg';

import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


const BadgeNew = () => (
    <div>
        <NavBar />
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                <Badge
                    firstName="Bryan S."
                    lastName="Rodríguez"
                    twitter="bryansrm"
                    jobTitle="Frontend Engineer"
                    avatarUrl="https://lh3.googleusercontent.com/proxy/M0qyLCfbJxfMnaL2RvCv_6dm_W6qLIEEebB-yVzB9fmS-T30RoL1KrGr6tRlX2XjeMCtR-d59qvaG5szwD5YJIl2I_X-mViq-XIqe_tMj48C"
                />
                </div>
                <div className="col">
                    <BadgeForm />
                </div>
            </div>
        </div>
    </div>
 
);

export default BadgeNew;