import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { Redirect } from 'react-router-dom';

const AddAdmin = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [errMessage, setErrMessage] = useState("");
    const [isAddedAdmin, setIsAddedAdmin] = useState(false);
    const handleAddAdmin = () => {
        const newAdminEmail = document.getElementById("newAdminEmail").value;
        let emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
        if (emailRegEx.test(newAdminEmail)) {
            // For removing error message
            setErrMessage("");

            const newAdminData = { email: newAdminEmail };
            newAdminData.addedBy = loginUserDetails;
            // For Deleting some unnesseserry info
            delete newAdminData.addedBy.isSignIn;
            delete newAdminData.addedBy.errMessage;

            fetch('https://nameless-fjord-98328.herokuapp.com/add-admin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAdminData)
            })
                .then(response => response.json())
                .then(data => {
                    if (!data.message) {
                        setErrMessage("");
                        setIsAddedAdmin(true)
                    } else {
                        setErrMessage(data.message);
                    }
                })
        } else {
            setErrMessage("This is not a valid email address.");
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-12">
                {
                    isAddedAdmin && <Redirect to="/view-admins" />
                }
                {
                    errMessage &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {errMessage}
                    </div>
                }
            </div>
            <div className="col-md-8">
                <div className="mb-3">
                    <input type="text" id="newAdminEmail" className="form-control" placeholder="Email Address" />
                </div>
            </div>
            <div className="col-md-4">
                <button className="btn btn-purple px-5 btn-md" onClick={handleAddAdmin}>Add As Admin</button>
            </div>
        </div>
    );
};

export default AddAdmin;