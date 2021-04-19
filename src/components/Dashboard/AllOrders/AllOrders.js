import React from 'react';

const AllOrders = () => {
    const handleServiceStatus = (e) => {
        console.log(e.target.getAttribute('data-orderid'));

    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    <th scope="col">Pay With</th>
                    <th scope="col">Ordered At</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto@gmail.com</td>
                    <td>Web Development</td>
                    <td>Credit Card</td>
                    <td>20-05-2001</td>
                    <td>
                        <select id="orderStatus" data-orderid="123" onChange={handleServiceStatus}>
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                            <option value="on-going">On Going</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default AllOrders;