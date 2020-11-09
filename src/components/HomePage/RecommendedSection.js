import React from 'react'
import '../../App.css'
import RecommendedItem from './RecommendedItem'

function RecommendedSection() { 
        return (
            <>
            <section id="recommended">
                <div className="container-fluid content-section text-center">
                    <div className="row ">
                        <div className="col-lg-6 offset-lg-3">
                            <h2>RECOMMENDED READING</h2>
                            <div className="recommended__content">
                                <h4>BEARD</h4>
                                <div className="">
                                    <div className="list-group">
                                        <RecommendedItem 
                                            title="Beard Oil and Its Use"
                                            link='/'
                                        />
                                        <RecommendedItem 
                                            title="10 Tips to Grow Beard"
                                            link='/'
                                        />
                                        <RecommendedItem 
                                            title="Beard Hair Falling Out"
                                            link='/'
                                        />
                                        <RecommendedItem 
                                            title="What is Beard Wash?"
                                            link='/'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bgimg-2">
                <p className="text">With Great Beard Comes Great Responsibility.</p>
            </div>
        </>
        )
    
}

export default RecommendedSection