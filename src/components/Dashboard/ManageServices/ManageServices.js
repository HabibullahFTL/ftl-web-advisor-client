import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleServiceDelete = (e) => {
        const dataTarget = e.target;
        const serviceId = dataTarget.getAttribute('data-serviceid');
        fetch('https://nameless-fjord-98328.herokuapp.com/delete-service/?service_id='+serviceId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                dataTarget.parentElement.parentElement.remove();
            }
        })
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Service Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Updated By</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map(service => {
                        return (
                            <tr>
                                <td>
                                    <img src={service.photo} width="80px" alt="" />
                                </td>
                                <td>{service.serviceTitle}</td>
                                <td>{service.serviceDescription}</td>
                                <td>{service.createdAt}</td>
                                <td>
                                    <button className="btn btn-danger me-1 mb-1" data-serviceid={service._id} onClick={handleServiceDelete}><i className="fas fa-trash"></i></button>
                                    <button className="btn btn-success me-1 mb-1"><i className="fas fa-edit"></i></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ManageServices;