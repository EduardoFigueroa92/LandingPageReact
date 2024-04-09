import React from "react" ;
export const Card = () => {
    return (
        <>
        <div className="card" style={"width: 18rem;"}>
            <img src="https://www.ciclo21.com/wp-content/uploads/2023/12/vuelta-espana-logo-2024-unipublic-press.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    );
} 
export default Card;