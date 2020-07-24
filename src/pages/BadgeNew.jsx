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
                    avatarUrl="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-creador-de-avatar-masculino.jpg"
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