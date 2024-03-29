import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Badges.css';
import confLogo from '../assets/images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';



class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: [],
    };

    componentDidMount(){
        this.fetchData();
    }

    async fetchData() {
        this.setState({ loading: true, error: null }) 
        
        try{
            const data = await api.badges.list();
            this.setState({ loading: false, data })
        }
        catch( error ){
            this.setState({ loading: false, error })
        }
    }

    render(){

        if( this.state.loading === true ){
            return <PageLoading />;
        }

        if( this.state.error ){
            return <PageError msgError={this.state.error.toString()} />;
        }

        return(
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                        <img
                            className="Badges_conf-logo"
                            src={confLogo}
                            alt="Conf Logo"
                        />
                        </div>
                    </div>
                </div>
    
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    
                    <BadgesList listbadges={this.state.data} />
                </div>
            </div>
        );
    }
    
}

export default Badges;