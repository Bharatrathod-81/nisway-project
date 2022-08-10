import "./header.css";
import { FaNeos } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Header = () => {

    return(
        <div className="header-body">
            <Link to="/" className="logo-body">
            <FaNeos className="logo"/>
            <h1 className="logo-heading">isway</h1>
            <FaNeos className="logo"/>
            <h1 className="logo-heading">ews</h1>
            </Link>
        </div>
    )
};