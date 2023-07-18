import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{/* <h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-auto bg-dark sticky-top">
						<div class="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top">
							<a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
							<i class="side-icon fa-solid fa-rocket"></i>
							</a>
							<ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
								<li class="nav-item">
									<a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
									<i class="side-icon fa-solid fa-house"></i>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
									<i class="side-icon fa-solid fa-chart-pie"></i>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
									<i class="side-icon fa-solid fa-plus"></i>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
									<i class="side-icon fa-solid fa-dollar-sign"></i>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
									<i class="side-icon fa-solid fa-ghost"></i>
									</a>
								</li>
							</ul>
							<div class="dropdown">
								<a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="side-icon fa-solid fa-circle-user"></i>
								</a>
								<ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
									<li><a class="dropdown-item" href="#">New project...</a></li>
									<li><a class="dropdown-item" href="#">Settings</a></li>
									<li><a class="dropdown-item" href="#">Profile</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm p-3 min-vh-100">
						
					</div>
				</div>
			</div>
		</div>
	);
};
