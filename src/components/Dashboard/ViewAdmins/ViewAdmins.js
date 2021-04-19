import React from 'react';

const ViewAdmins = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Email Address</th>
                    <th scope="col">Updated By</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Otto@gmail.com</td>
                    <td>Raihan</td>
                    <td>20-05-2001 </td>
                    <td>
                        <button className="btn btn-danger me-1 mb-1"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ViewAdmins;