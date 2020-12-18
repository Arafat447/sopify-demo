import React from 'react';
import Home from '../Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const Domain = () => {
    return (
        <div>
            <Home>
            <div className="row">
                <div className="col-7">
                    <h6>Strengthen your brand with a custom domain</h6>
                    <p><small>Your current domain is arst88.myshopify.com but you can add a custom domain to help</small></p>
                    <div className="btn btn-custom">Add domain</div>
                    <a className="product-link" href="#"><FontAwesomeIcon icon={faInfoCircle} /> Learn more about domains</a>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src="https://i.postimg.cc/wjVfQjgQ/sopi-domain.jpg" alt=""/>
                </div>
            </div>
            </Home>
        </div>
    );
};

export default Domain;