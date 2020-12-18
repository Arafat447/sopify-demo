import React from 'react';
import Home from '../Home';
import './AddProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const AddProducts = () => {
    return (
        <div>
            <Home>
            <div className="row">
                <div className="col-7">
                    <h6>Add your first product</h6>
                    <p><small>Add physical items, digital downloads, services, or anything else you dream up.</small></p>
                    <div className="btn btn-custom">Add Products</div>
                    <a className="product-link" href="#"><FontAwesomeIcon icon={faInfoCircle} /> Learn more about products</a>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src="https://i.postimg.cc/Xv0J9DGS/sopi-product.jpg" alt=""/>
                </div>
            </div>
            </Home>
        </div>
    );
};

export default AddProducts;