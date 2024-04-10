import React from "react";
export const Card = (props) => {
    return (

        <div className="col-3">
            <div className="card" >
                <img className="card-img-top" style={{ height: "200px" }} src={props.img} />
                <div className="card-body" style={{ height: "300px" }}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text" style={{ height: "160px" }}>{props.text}</p>
                    <a href="#" className="btn btn-primary" >Más información</a>
                </div>
            </div>
        </div>

    );
}
export default Card;