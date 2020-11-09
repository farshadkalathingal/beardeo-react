import React from 'react'
import BlogCardItem from './BlogCardItem'

function BlogCards() {
    return (
        <>
            <section id="blog">
                <div className="container content-section text-center">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div id="article">
                                <h2>RECOMMENDED READING</h2>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <BlogCardItem 
                                        title="Blow Dry Beard"
                                        image=""
                                        likes="5"
                                        comments="10"
                                        tag="Lifestyle"
                                        />
                                    
                                        <BlogCardItem 
                                            title="Food for Beard Growth"
                                            image=""
                                            likes="5"
                                            comments="10"
                                            tag="Lifestyle"
                                        />

                                        <BlogCardItem 
                                            title="Bad Beard Habbit"
                                            image=""
                                            likes="5"
                                            comments="10"
                                            tag="Lifestyle"
                                        />

                                        <BlogCardItem 
                                            title="Beard Hair Falling Out"
                                            image=""
                                            likes="5"
                                            comments="10"
                                            tag="Lifestyle"
                                        />

                                        <BlogCardItem 
                                            title="What is Beard Wash?"
                                            image=""
                                            likes="5"
                                            comments="10"
                                            tag="Lifestyle"
                                        />

                                        <BlogCardItem 
                                            title="Beard Oil and Its Use"
                                            image=""
                                            likes="5"
                                            comments="10"
                                            tag="Lifestyle"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCards
