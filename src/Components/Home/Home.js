import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faPenFancy, faGlobe} from '@fortawesome/free-solid-svg-icons'
const Home = (props) => {
    return (
        <div>
            <Dashboard>
                <div className="row  d-flex justify-content-center">
                    <div className="col-lg-9 home-container">
                        <div className="home-head">
                            <h3>Get ready to sell online. Try these tips to get started.</h3>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4 home-menu">
                                <NavLink to="/" activeStyle={{border:"none" ,backgroundColor:" #fff",borderLeft:"3px solid green", color: "#008060"}}><FontAwesomeIcon icon={faTag} />  Add product</NavLink>
                                <NavLink to="/customize" activeStyle={{border:"none" ,borderLeft:"3px solid green", color: "#008060"}}><FontAwesomeIcon icon={faPenFancy} /> Customize theme</NavLink>
                                <NavLink to="/domain" activeStyle={{border:"none" ,borderLeft:"3px solid green", color: "#008060"}}><FontAwesomeIcon icon={faGlobe} /> Add domain</NavLink>
                            </div>
                            <div className="col-8">
                                {
                                    props.children
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </div>
    );
};

export default Home;