import React from 'react';

const ManageServices = () => {
    return (
        <table class="table">
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
                <tr>
                    <td>Otto@gmail.com</td>
                    <td>Web Development</td>
                    <td>Credit Card</td>
                    <td>20-05-2001</td>
                    <td>
                        <button className="btn btn-danger me-1 mb-1"><i className="fas fa-trash"></i></button>
                        <button className="btn btn-success me-1 mb-1"><i className="fas fa-edit"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ManageServices;