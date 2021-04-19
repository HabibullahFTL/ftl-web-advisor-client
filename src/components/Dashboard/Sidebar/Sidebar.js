import React from 'react';
import './Sidebar.css';
import logo from '../../../img/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="brand">
                <a href="/">
                    <img src={logo} alt="" style={{ height: "50px" }} />
                </a>
            </div>
            <label htmlFor="sidebarItemsChk" className="btn btn-bars ms-auto"><i className="fas fa-bars"></i></label>
            <input type="checkbox" id="sidebarItemsChk" />
            <ul>
                <li><a href="/all-order"><i className="fas fa-list-alt"></i> Order List</a></li>
                <li><a href="/add-new-service"><i className="fas fa-plus"></i> Add New Service</a></li>
                <li><a href="/manage-services"><i className="fas fa-window-restore"></i> Manage Services</a></li>
                <li><a href="/add-new-admin"><i className="fas fa-user-plus"></i> Add New Admin</a></li>
                <li><a href="/view-admins"><i className="fas fa-users"></i> View Admins</a></li>
                <li><a href="/all-reviews"><i className="fas fa-list"></i> All Reviews</a></li>
                
                <li><a href="/my-orders"><i className="fas fa-list-alt"></i> My Orders</a></li>
                <li><a href="/create-review"><i className="fas fa-folder-plus"></i> Create Review</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;