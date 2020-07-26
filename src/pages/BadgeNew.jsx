import React from 'react';

import header from '../assets/images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import { Redirect, useHistory } from 'react-router-dom';

const BadgeNew = () => {

    const history = useHistory();
    var form = {
        avatarUrl: 'https://www.gravatar.com/avatar/0fc6d5ee2ee176d4581acf6a7e5644cc?d=identicon'
    };

    var [ form, setElementsForm ] = React.useState(form);

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setElementsForm(elementsForm => ({ ...form, [name]: value}));
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await api.badges.create(form);
            
            history.push("/badges");
        }
        catch( error ){
            // this.setState({ loading: false, error });
            console.log(error);
        }
    }
    
    return(
        <div>
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
                        <BadgeForm 
                            onSubmit={handleSubmit}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
            </div>
        </div>
 
    );
}

export default BadgeNew;