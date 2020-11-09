import React from 'react'
import '../../App.css'
import ContactSection from '../HomePage/ContactSection'
import HeroSection from '../HomePage/HeroSection'
function Contact() {
    return (
        <>
            <HeroSection
            title="get in Touch"
            link="contact"
            />
            <ContactSection />
        </>
    )
}

export default Contact
