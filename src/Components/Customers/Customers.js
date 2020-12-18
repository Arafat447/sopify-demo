import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Customers = () => {
    return (
        <div>
            <Dashboard>
                <div className="d-flex justify-content-between p-3">
                    <h3>Customers</h3>
                    <h3>Import Customers</h3>
                </div>
                <div className="orders-container text-center">
                    <img src="https://i.postimg.cc/vBYg1Kn0/sopi-customer.jpg" alt=""/>
                    <h4 className="m-4">Manage customer details</h4>
                    <p><small>This is where you can manage your customer information and view their purchase history.</small></p>
                    <button className="btn btn-custom">Add customers</button>
                    <button className="btn btn-custom ml-3">Import customers</button>
                </div>
            </Dashboard>
        </div>
    );
};

export default Customers;