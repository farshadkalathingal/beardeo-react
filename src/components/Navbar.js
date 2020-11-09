import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <>
            <header>
		<nav className="navbar navbar-custom fixed-top navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="{% url 'home' %}">bear<span className="navbar-brand-span">deo.</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
                            <Link to='/' className='nav-link'>Home</Link>
						</li>
						<li className="nav-item">
                            <Link to='/blog' className='nav-link'>Blog</Link>
						
						</li>
						<li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
						
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-link'>Contact</Link>

						</li>
						<li className="nav-item">
                            <Link to='/login' className='nav-link'>Login</Link>
                        </li>
					</ul>
				</div>
			</div>
		</nav>
    </header>
        </>
    )
}

export default Navbar
