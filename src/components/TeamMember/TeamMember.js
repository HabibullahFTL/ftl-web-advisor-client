import React from 'react';
import './TeamMember.css';
import reviewer from '../../img/logo-circle.png';

const TeamMember = () => {
    return (
        <div className="col-lg-3 col md-4 col-sm-6">
            <div className="team-member bg-white m-2 shadow">
                <img src={reviewer} alt="" className="img-thumbnail rounded-circle"/>
                <h4>Habibullah Bahar</h4>
                <p>Web Developer</p>
            </div>
        </div>
    );
};

export default TeamMember;