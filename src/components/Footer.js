import React from 'react'

function Footer() {
    return (
        <footer>
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
					<p className="credits">
						<strong>Copyright &copy; <script>document.write(new Date().getFullYear());</script> <a href="">Registered</a>.</strong> All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</footer>
    )
}

export default Footer
