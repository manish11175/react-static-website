import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Common(props) {
    return (
        <section className="d-flex align-items-center" id="header">
              
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.title} <strong className="brand-name">Manish Chauhan</strong></h1>
                        <h3 className="my-3">{props.subheading}</h3>
                        <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                    </div>
                    </div>
                   
                    <div className="col-lg-6  order-1 order-lg-2 header-img">
                       <img src={props.imgsrc} className="img-fluid animated" alt="image"/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    )
}
