import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const TopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src="https://i.postimg.cc/zBSKKvTC/hiclipart-com.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="form-group has-search d-none d-lg-block my-2 search-box my-lg-0">
                    <span class="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
                    <input type="text" class="form-control" placeholder="Search" />
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Arafat Hossain</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Manage account</a>
                                <a className="dropdown-item" href="#">Log out</a>
                                <a className="dropdown-item" href="#">Sopify help center</a>
                                <a className="dropdown-item" href="#">Community forum</a>
                                <a className="dropdown-item" href="#">Hire a Sopify expert</a>
                                <a className="dropdown-item" href="#">Keyboard </a>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default TopBar;