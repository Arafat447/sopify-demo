import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './Orders.css'
const Orders = () => {
    return (
        <div>
            <Dashboard>
                <h3>Orders</h3>
                <div className="orders-container text-center">
                    <img className="img-fluid" src="https://i.postimg.cc/15P58vtV/sopi-order.jpg" alt=""/>
                    <h4 className="m-4">Your orders will show here</h4>
                    <p><small>To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.</small></p>
                    <button className="btn btn-custom">Select plan</button>
                </div>
            </Dashboard>
        </div>
    );
};

export default Orders;