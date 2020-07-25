import React from 'react';

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