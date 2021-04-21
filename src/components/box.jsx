import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import Button from "./Button.jsx";
import { Link } from 'react-router-dom';
import Dummies from "../dummy";

const Box = (props) => {
    return(
        <div>
            <div className="container">
                <div className="row box">
                    <div className="col-4 image-part">
                        <img src={props.src} alt="dummy"/>
                        <h3>{props.carName}</h3>
                    </div>
                    <div className="col-8 content-part">
                        <h2>{props.rate} per hour</h2>
                        <p>{props.address}</p>
                        <p>{props.ratings}</p>
                        <Button 
                            src = {props.src}
                        />
                        {/* <Link to={'/car/${Dummy.id}'}>
                          <button className="btn btn-dark">Drive</button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;