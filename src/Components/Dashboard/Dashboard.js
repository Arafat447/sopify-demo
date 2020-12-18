import React from 'react';
import './Dashboard.css'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <TopBar></TopBar>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-9">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;