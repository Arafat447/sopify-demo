import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSortAmountDown, faTag, faUser, faChartBar, faBullhorn, faPercentage, faBorderAll } from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <NavLink to="/"  activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faHome} />Home</NavLink>
                <NavLink to="/orders" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faSortAmountDown} /> Orders</NavLink>
                <NavLink to="/products" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faTag} /> Products</NavLink>
                <NavLink to="/customers" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faUser} /> Customers</NavLink>
                <NavLink to="/review" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faChartBar} /> Analytics</NavLink>
                <NavLink to="/marketing" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faBullhorn} /> Marketing</NavLink>
                <NavLink to="/discount" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faPercentage} /> Discount</NavLink>
                <NavLink to="/apps" activeStyle={{backgroundColor:" #F1F2F3",color: "#008060"}}><FontAwesomeIcon icon={faBorderAll} /> Apps</NavLink>
        </div>
    );
};

export default SideBar;