import React from 'react'

function ContactSection() {
    return (
        <>
            <section id="contact">
                <div className="container content-section">
                    <div className="row ">
                        <div className="col-lg-8 offset-lg-2">
                            <form name="feedbackform" id="feedbackform" action="." method="post">
                                <div className="form">
                                    <input type="text"  name="name" id="name" placeholder="Your Name *" required />
                                    <input type="email"  name="email"id="email" placeholder="Your E-mail Address *" required />
                                    <textarea  name="message" id="message" rows="7" placeholder="Type your Message *" required></textarea>
                                    <input type="submit" name="btnSubmit" id="click" value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
