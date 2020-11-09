import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
function AboutSection2() {
    return (
        <>
            <section id="page-sample">
                <div className="container content-section text-left text-align">
                    <div className="row text-center">
                        <div className="col-lg-8 offset-lg-2">
                            <h2>beardeo.</h2>
                        
                            <div>
                                <h4>A Man Without Beard is Like Lion Without Mane.</h4>
                                <p> Guys, I'm Farshad Kalathingal, the Founder of <Link to="/"><b><i>BEARDEO</i></b></Link> Website. I created this website for the people who love to grow their beard.
                                </p>
                                <p> In this website I provide lot of information on growing Beard and its Caring.</p>
                                <p> I created this website, bcoz I faced lot of problems on growing my beard for the first time. So I decided to create
                                    a website including information about Beard and I believe it will help you to grow your beard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default AboutSection2
