import React from 'react'
import Common from './Common';
import about from "../assets/image/about.png";
export default function About() {
    return (
        <>
        <Common title="Website developer " imgsrc={about} visit="/contact" btnname="Contact Now" subheading="We are the team of website developer who make awesome website!!" />
        </>
    )
}
