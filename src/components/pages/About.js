import React from 'react'
import '../../App.css'
import AboutSection2 from '../HomePage/AboutSection2'
import HeroSection from '../HomePage/HeroSection'

function About() {
    return (
        <>
            <HeroSection 
            title="About"
            text="Beardeo"
            link="page-sample"
            />
            <AboutSection2 />
        </>
    )
}

export default About
