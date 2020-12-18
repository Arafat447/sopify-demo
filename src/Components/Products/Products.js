import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Products = () => {
    return (
        <div>
            <Dashboard>
                <div className="d-flex justify-content-between p-3">
                    <h3>Product</h3>
                    <h3>Import</h3>
                </div>
                <div className="orders-container text-center">
                    <img src="https://i.postimg.cc/L5h3dwQq/sopi-import.jpg" alt=""/>
                    <h4 className="m-4">Add and manage your products</h4>
                    <p><small>This is where you’ll add products and manage your pricing. You can also import and export your product inventory.</small></p>
                    <button className="btn btn-custom">Add product</button>
                    <button className="btn btn-custom ml-3">Find product</button>
                </div>
            </Dashboard>
        </div>
    );
};

export default Products;