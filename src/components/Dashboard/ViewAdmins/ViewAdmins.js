import React, { useEffect, useState } from 'react';

const ViewAdmins = () => {
    const [admins, setAdmins] = useState([]);
    const [isUpdated,setIsUpdated] = useState(false);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [isUpdated])

    const handleAdminDelete = (e)=>{
        const dataTarget = e.target;
        const adminId = dataTarget.getAttribute('data-adminid');
        setIsUpdated(false);
        
        fetch('https://nameless-fjord-98328.herokuapp.com/delete-admin/?admin_id='+adminId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                setIsUpdated(true);
            }
        })
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Email Address</th>
                    <th scope="col">Updated By</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    admins.map(admin => {
                        return (
                            <tr key={admin._id}>
                                <td>{admin.email}</td>
                                <td>{admin.addedBy?.name}</td>
                                <td>{admin.addedAt}</td>
                                <td>
                                    <button className="btn btn-danger me-1 mb-1" onClick={handleAdminDelete} data-adminid={admin._id}><i className="fas fa-trash" data-adminid={admin._id}></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ViewAdmins;