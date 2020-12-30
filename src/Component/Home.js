import React from 'react';
import Common from './Common';
import home from "../assets/image/home.png"


export default function Home() {
    return (
       <>
        <Common title="Grow More Together With" imgsrc={home} btnname="Get Started" visit="/service" subheading="We are the team of website developer who make awesome website!!" />
       </>
            )
}
