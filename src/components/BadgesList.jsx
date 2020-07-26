import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/BadgesList.css';

const BadgesListItem = ({ badge }) => {

    return (
        <div className="BadgesListItem">
            <img
            className="BadgesListItem__avatar"
            src={badge.avatarUrl}
            alt={`${badge.firstName} ${badge.lastName}`}
            />

            <div>
                <strong>
                    {badge.firstName} {badge.lastName}
                </strong>
                <br />@{badge.twitter}
                <br />
                {badge.jobTitle}
            </div>
        </div>
    );
}

const BadgesList = ({ listbadges }) => {

    if( listbadges.length == 0 ){
        return (
            <div className="text-center mt-5 pt-5">
                <h2>Not exist badges</h2>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <ul className="list-unstyled">
                {listbadges.map(badge => {
                    return (
                    <li key={badge.id}>
                        <BadgesListItem badge={badge} />
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;