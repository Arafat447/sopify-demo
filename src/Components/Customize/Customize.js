import React from 'react';
import Home from '../Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const Customize = () => {
    return (
        <div>
            <Home>
            <div className="row">
                <div className="col-7">
                    <h6>Edit the look and feel of your online store</h6>
                    <p><small>Choose a theme and add your logo, colors, and images to reflect your brand.</small></p>
                    <div className="btn btn-custom">Customize theme</div>
                    <a className="product-link" href="#"><FontAwesomeIcon icon={faInfoCircle} /> Learn more about themes</a>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src="https://i.postimg.cc/mgTMsDjF/sopi-theme.jpg" alt=""/>
                </div>
            </div>
            </Home>
        </div>
    );
};

export default Customize;