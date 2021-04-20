import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import logo from '../../../img/logo.png';
import { UserContext } from '../../../App';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-admin')
            .then(res => res.json())
            .then(data => {
                const adminFinding = data.find(admin => admin.email === loginUserDetails.email);
                if (adminFinding) {
                    setIsAdmin(true);
                };
            })
    }, [loginUserDetails.email])
    return (
        <div className="sidebar">
            <div className="brand">
                <Link to="/">
                    <img src={logo} alt="" style={{ height: "50px" }} />
                </Link>
            </div>
            <label htmlFor="sidebarItemsChk" className="btn btn-bars ms-auto"><i className="fas fa-bars"></i></label>
            <input type="checkbox" id="sidebarItemsChk" />
            <ul>
                {
                    isAdmin &&
                    <>
                        <li><Link to="/all-order"><i className="fas fa-list-alt"></i> Order List</Link></li>
                        <li><Link to="/add-new-service"><i className="fas fa-plus"></i> Add New Service</Link></li>
                        <li><Link to="/manage-services"><i className="fas fa-window-restore"></i> Manage Services</Link></li>
                        <li><Link to="/add-new-admin"><i className="fas fa-user-plus"></i> Add New Admin</Link></li>
                        <li><Link to="/view-admins"><i className="fas fa-users"></i> View Admins</Link></li>
                        <li><Link to="/all-reviews"><i className="fas fa-list"></i> All Reviews</Link></li>
                    </>
                }
                {
                    !isAdmin &&
                    <>
                        <li><Link to="/my-orders"><i className="fas fa-list-alt"></i> My Orders</Link></li>
                        <li><Link to="/create-review"><i className="fas fa-folder-plus"></i> Create Review</Link></li>
                    </>
                }
            </ul>
        </div>
    );
};

export default Sidebar;