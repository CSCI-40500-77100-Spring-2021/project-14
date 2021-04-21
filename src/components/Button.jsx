import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
        <Link to={{
            pathname: "/car",
            state: {src: props.src}
        }}>
            <button className="btn btn-dark">Drive</button>
        </Link>
    );
}

export default Button;