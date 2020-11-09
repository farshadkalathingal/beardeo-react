import React from 'react'
import '../../App.css'

function HeroSection(props) {

    const checkTitle = props.title ? props.title : 'beardeo';
    const checkLink = props.link ? props.link : 'about';
        return (
            <>
            <section className="intro">
            <div className="intro-body">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="brand-heading">{checkTitle}.</h1>
                            <p className="intro-text">
                                {props.text}.
                            </p>
                            <a href={'#'+`${checkLink}`} className="btn btn-circle page-scroll">
                            <i className="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    
}

export default HeroSection