import React from 'react';

import header from '../assets/images/badge-header.svg';

import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


const BadgeNew = () => {

    var form = {};

    var [ form, setElementsForm ] = React.useState(form);

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setElementsForm(elementsForm => ({ ...form, [name]: value}));
        
    };
    
    return(
        <div>
            <NavBar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge
                        firstName={form.firstName}
                        lastName={form.lastName}
                        twitter={form.twitter}
                        jobTitle={form.jobTitle}
                        avatarUrl="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-creador-de-avatar-masculino.jpg"
                    />
                    </div>
                    <div className="col">
                        <BadgeForm handleChangeForm={handleChange} />
                    </div>
                </div>
            </div>
        </div>
 
    );
}

export default BadgeNew;