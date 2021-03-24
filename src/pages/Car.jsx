import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";

const Car = (props) => {
    console.log(props);
    return <div>
        <section className="car-image">
		    <div className="bcar row container-fluid">
			    <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg/1200px-Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg"/>

		    </div>
	    </section>
        <h1 className="display-1">Honda Civic 2020<span className="space">Price : $5/quarter-mile</span>
                </h1>
                <h3 className="name display-3"> Naknsf </h3>
                <h3 className="add display-3">Address: 792 Big Indian, New York, NY, 10158</h3>
                <p className="time">Y minutes from your current location</p>
                <p className="review">User review: 5*</p>

        <section className="car-contents">
            <div className="row car-content">
                
                <button type="button" className="btn btn-primary" id="aler" onclick="notification()">Confirm Car</button>
            </div>
	    </section>
    </div>
}

export default Car;



{/* <h1 className="display-1">Honda Civic 2020<span className="space">Price : $5/quarter-mile</span>
                </h1>
                <h3 className="name display-3">Owner: John Doe </h3>
                <h3 className="add display-3">Address: 792 Big Indian, New York, NY, 10158</h3>
                <p className="time">Y minutes from your current location</p>
                <p className="review">User review: 5*</p> */}

                // <h1 className="display-1">{props.model}<span className="space">Price : $5/quarter-mile</span>
                // </h1>
                // <h3 className="name display-3">{props.owner}</h3>
                // <h3 className="add display-3">Address: {props.address}</h3>
                // <p className="time">{props.dist} minutes from your current location</p>
                // <p className="review">User review: {props.ratings}*</p>


	