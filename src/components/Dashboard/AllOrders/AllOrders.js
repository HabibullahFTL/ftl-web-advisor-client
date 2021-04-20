import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    const handleServiceStatus = (e) => {
        const orderId =  e.target.getAttribute('data-orderid');
        const status =  e.target.value;
        const newOrderDetails = orders.find(order=>order._id === orderId);
        newOrderDetails.status = status;
        console.log(newOrderDetails);
        fetch('https://nameless-fjord-98328.herokuapp.com/update-order/?order_id='+orderId+'&status='+status, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                console.log("updated");
            }
        })
    }
    const handleDeleteOrder = (e)=>{
        const orderId =  e.target.getAttribute('data-orderid');
        fetch('https://nameless-fjord-98328.herokuapp.com/delete-order/?order_id='+orderId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                e.target.parentElement.parentElement.remove();
            }
        })
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
                                        {
                                            order.status === 'pending' ? 
                                            <option value="pending" selected="selected" >Pending</option> :
                                            <option value="pending" >Pending</option>
                                        }
                                        {
                                            order.status === 'done' ? 
                                            <option value="done" selected="selected" >Done</option> :
                                            <option value="done" >Done</option>
                                        }
                                        {
                                            order.status === 'on-going' ? 
                                            <option value="on-going" selected="selected" >On Going</option> :
                                            <option value="on-going">On Going</option>
                                        }
                                    </select>
                                    <button className="btn btn-danger ms-1 mt-1" data-orderid={order._id} onClick={handleDeleteOrder}>X</button>
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