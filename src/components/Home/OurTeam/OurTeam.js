import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <section className="ourteam-section">
            <div className="container py-3">
                <h2 className="section-title text-center"></h2>
                <div className="row">
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;