import React from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import Box from "../components/box.jsx";
import Dummies from "../dummy.js";

const Cars = () => {
    return(
        <div>
            {Dummies.map(
        Dummy => (
          <Box 
          key={Dummy.id}
            src={Dummy.imgURL}
            carName={Dummy.car}
            rate={Dummy.charge}
            address={Dummy.address}
            ratings={Dummy.ratings}
            
            // model={Dummy.car}
            // owner={Dummy.owner}
            // dist={Dummy.dist}
        />

        )
      )}
        </div>
    );
}

export default Cars;