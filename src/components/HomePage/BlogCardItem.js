import React from 'react'
import {Link} from 'react-router-dom'

function BlogCardItem(props) {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-4 mb-5">      
                <Link to={props.path}>
                    <div className="card">
                        <img src={props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <ul className="tags">
                
                                        <li>{props.tag}</li>
                                        
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="other">
                                        <li>{props.likes} <i className="far fa-thumbs-up" /></li>
                                        <li>{props.comments} <i className="far fa-comments" /></li>
                                    </ul>
                                </div>
                            </div>
                            <h5 className="my-0">{props.title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogCardItem
