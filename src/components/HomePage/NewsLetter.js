import React from 'react'
import '../../App.css'

function NewsLetter() { 
        return (
            <>
          
            <section id="subscribe">
                <div className="container-fluid content-section text-center ">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h3 className="animate-box"><label htmlFor="email">Join The beardeo Family</label></h3>
                            <p>We share tips and education for everything grooming and self improvement. In addition to that we deliver updates for company events.</p>
                            <form  name="tipsform"  id="tips" action="." method="POST">
                                <div className="form">
                                    <i className="fa fa-paper-plane fa-fw"></i>
                                    <input type="email" id="email" name="email" placeholder=" Your E-mail Address *" required />
                                    <input type="submit" id="click" className="clearfix btn" value="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="bgimg-4">
                <p className="text">Grow What Your Father Gave To You.</p>
            </div>
        
        </>
    )
    
}

export default NewsLetter