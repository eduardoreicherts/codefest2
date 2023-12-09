import "./index.css"

import logo from './logo.jpg';

const Header = () => {
    return (
        <header>
        <nav>
        <img src={logo} alt="logo"/>
        </nav>
    </header>
    );
};

export default Header