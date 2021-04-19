import React, { useContext } from 'react';
import logo from '../../../img/logo.png';
import './NavBar.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';

const NavBar = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const handleSignOut = ()=>{
        setLoginUserDetails({
            isSignIn: false,
            name: '',
            email: '',
            photo: '',
            uid: null,
            errMessage: ''
          })
        localStorage.removeItem('user')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="FTL WEB ADVISOR" style={{height:"45px"}} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Out Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact us</Link>
                        </li>
                        {
                            loginUserDetails.isSignIn ? 
                                <li className="nav-item">
                                    <Link className="btn btn-purple px-4"  onClick={handleSignOut} to="/login"><i className="fas fa-sign-in-alt"></i> Log Out</Link>
                                </li> :
                                <li className="nav-item">
                                    <Link className="btn btn-purple px-4" to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;