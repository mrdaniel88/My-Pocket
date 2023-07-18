import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<div>
			{/* <h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div classNameName="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-auto bg-dark sticky-top min-vh-100">
						<div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top">
							<a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
								<i className="side-icon fa-solid fa-rocket"></i>
							</a>
							<ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
								<li className="nav-item">
									<a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
										<i className="side-icon fa-solid fa-house"></i>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
										<i className="side-icon fa-solid fa-chart-pie"></i>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
										<i className="side-icon fa-solid fa-plus"></i>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
										<i className="side-icon fa-solid fa-dollar-sign"></i>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
										<i className="side-icon fa-solid fa-ghost"></i>
									</a>
								</li>
							</ul>
							<div className="dropdown">
								<a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="side-icon fa-solid fa-circle-user"></i>
								</a>
								<ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
									<li><a className="dropdown-item" href="#">New project...</a></li>
									<li><a className="dropdown-item" href="#">Settings</a></li>
									<li><a className="dropdown-item" href="#">Profile</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <div className="col-sm p-3 min-vh-100">
						
					</div> */}
				</div>
			</div>
		</div>
	);
	
};
