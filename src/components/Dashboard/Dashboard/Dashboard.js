import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = ({ children, items, pageTitle }) => {
    return (
        <div className="row dashboard-container">
            <div className="col-md-3 col-lg-2 px-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-9 p-0">
                <h2 className="dashboard-title">{pageTitle && pageTitle}</h2>
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;