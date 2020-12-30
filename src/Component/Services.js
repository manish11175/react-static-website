import React from 'react';
import Card from './Card';
import Data from "./Data";

export default function Services() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Service</h1>
        </div>
         <div className="container-fluid" >
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    {
                    Data.map((val,index)=>{
                        return <Card imgsrc={val.imgsrc} key={index} title={val.title}/>;
                    })
                    }
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
