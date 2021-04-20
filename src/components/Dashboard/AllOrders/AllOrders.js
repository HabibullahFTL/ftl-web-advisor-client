import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleServiceStatus = (e) => {
        console.log(e.target.getAttribute('data-orderid'));
        console.log(orders);
    }
    return (
        <table className="table">
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
                {
                    orders?.map(order => {
                        return (
                            <tr key={order._id}>
                                <td>{order.customerName}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceDetails?.serviceTitle}</td>
                                <td>{order.paymentDetails.type} [{order.paymentDetails.card.brand}]</td>
                                <td>{order?.orderedAt}</td>
                                <td>
                                    <select id="orderStatus" data-orderid={order._id} onChange={handleServiceStatus}>
                                        <option value="pending">Pending</option>
                                        <option value="done">Done</option>
                                        <option value="on-going">On Going</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default AllOrders;