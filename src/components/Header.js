import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">
                <img
                    src='https://media.licdn.com/dms/image/v2/D560BAQFnXe5MF1Y6nA/company-logo_200_200/company-logo_200_200/0/1718546565626?e=2147483647&v=beta&t=vUiXq0o7RLujULxnZArlpsDVubf3X4WvZ6CXslUR570'
                    className='rounded-circle bg-success'
                    alt='Logo'
                    width={'20%'}
                />
            </Link>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav m-2">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/Home">{props.title1}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/About">{props.title2}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
