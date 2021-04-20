import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import product from '../../../img/product.jpg';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    useEffect(() => {
        fetch('https://nameless-fjord-98328.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => {
                const myOrderList = data.filter(order=>order.userDetails.uid === loginUserDetails.uid);
                setOrders(myOrderList)
            })
    }, [loginUserDetails.uid])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                orders?.map(order => {
                    return (
                        <div className="col" key={order._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-between">
                                        {order.serviceDetails?.serviceTitle} 
                                        {order?.status === undefined && <small className="badge bg-warning">Pending</small>}
                                        {order?.status === 'pending' && <small className="badge bg-warning">Pending</small>}
                                        {order?.status === 'done' && <small className="badge bg-success">Success</small>}
                                        {order?.status === 'on-going' && <small className="badge bg-info">On Going</small>}
                                        </h5>
                                    <p className="card-text">{order.serviceDetails?.serviceDescription}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyOrders;