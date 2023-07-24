import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <nav className="navbar navbar-dark bg-dark">
		// 	<div className="container">
		// 		<Link to="/" className="text-decoration-none">
		// 			<span className="navbar-brand mb-0 h1">My Pocket</span>
		// 		</Link>
		// 		{/* <div className="ml-auto">
		// 			<Link to="/demo">
		// 				<button className="btn btn-primary">Check the Context in action</button>
		// 			</Link>
		// 		</div> */}
		// 	</div>
		// </nav>

		// <nav className="navbar navbar-dark bg-dark fixed-top">
		// 	<div className="container-fluid">
		// 		<a className="navbar-brand" href="#">My Pocket</a>
		// 		<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
		// 			<span className="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		// 			<div className="offcanvas-header">
		// 				<h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
		// 				<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		// 			</div>
		// 			<div className="offcanvas-body">
		// 				<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
		// 					<li className="nav-item">
		// 						<a className="nav-link active" aria-current="page" href="#">Home</a>
		// 					</li>
		// 					<li className="nav-item">
		// 						<a className="nav-link" href="#">Link</a>
		// 					</li>
		// 					<li className="nav-item dropdown">
		// 						<a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		// 							Dropdown
		// 						</a>
		// 						<ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
		// 							<li><a className="dropdown-item" href="#">Action</a></li>
		// 							<li><a className="dropdown-item" href="#">Another action</a></li>
		// 							<li>
		// 								<hr className="dropdown-divider" />
		// 							</li>
		// 							<li><a className="dropdown-item" href="#">Something else here</a></li>
		// 						</ul>
		// 					</li>
		// 				</ul>
		// 				<form className="d-flex">
		// 					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
		// 					<button className="btn btn-outline-success" type="submit">Search</button>
		// 				</form>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">My Pocket</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#"><i className="side-icon fa-solid fa-house"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><i className="side-icon fa-solid fa-chart-pie"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><i className="side-icon fa-solid fa-plus"></i></a>
						</li>
						<li className="nav-item">
							<a className="nav-link"><i className="side-icon fa-solid fa-dollar-sign"></i></a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="side-icon fa-solid fa-circle-user"></i>
							</a>
							<ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="#">Login</a></li>
								<li><a className="dropdown-item" href="#">Signup</a></li>
								<li><a className="dropdown-item" href="#">Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="nav-item justify-content-end">
					<a className="nav-link"><i className="side-icon fa-solid fa-ghost"></i></a>
				</div>

			</div>
		</nav>
	);
};
