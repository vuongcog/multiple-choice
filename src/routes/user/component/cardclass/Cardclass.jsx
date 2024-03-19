import React from "react";
import "./Card.css"
const Cardclass = (props) => {

    return (
        <div className="class-card">
            <div className="title-card">
                <h3>{props.title}</h3>
                <h4 className="">{props.author}</h4>
            </div>
        </div>
    )
}    

export default Cardclass 