import React from 'react';
import {NavLink} from "react-router-dom";


export default function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top"  alt={props.imgsrc}/>
                            <div className="card-body">
                              <h5 className="card-title text-center">{props.title}</h5>
 
                              <NavLink to="#" className="card-btn">Check out</NavLink >
                            </div>
                          </div>
                        </div>
        </>
    )
}
