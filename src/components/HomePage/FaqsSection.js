import React from 'react'
import '../../App.css'

function FaqsSection() { 
        return (
            <>
          
          <section id="faqs">
            <div className="container-fluid content-section text-center ">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h3 className="animate-box">FAQs</h3>

                        <div className="faqs__content">
                            <button className="accordion">Is Beard Care a real thing?</button>
                            <div className="panel">
                                <p>Yes! Beard Care is very real. Men have beards - Beards need care. </p>
                            </div>

                            <button className="accordion">Can Beard Oil stop my skin from being itchy?</button>
                            <div className="panel">
                                <p>Yes! You can use any of our All Natural, Man Made products to help with itchy skin. Beard Oils and Beard Balms help nourish the skin and relieves itching in addition to making your beard awesome.</p>
                            </div>

                            <button className="accordion">Beards make you look old.</button>
                            <div className="panel">
                                <p>I agree. People misjudge my age by 10 years when I grow one. What they also seem to do is assume that I know what I’m talking about or that I’m qualified to give them advice. In these situations, I find that pensively tugging on your beard and waiting for them to answer their own questions works best. You’ll look like a fucking genius.</p>
                            </div>
                        </div>				
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
    
}

export default FaqsSection