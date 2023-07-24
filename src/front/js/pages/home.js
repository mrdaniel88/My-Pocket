import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center mt-5">
			<h1>Keep track of your incomes and expenses</h1>

			<div className="mt-5 d-flex justify-content-center">
				<div className="card p-5 d-flex flex-column align-items-center">
					<div className="card-body ">
						<div className="login-form ">
							<input type="email" className="form-control" placeholder="Email" aria-label="Email" required></input>
							<input type="password" className="form-control mt-2" placeholder="Password" aria-label="Password" required></input>
							<button className="btn mt-4 me-2" type="submit">Login</button>
							<button className="btn mt-4" type="submit">Signup</button>
						</div>
					</div>
				</div>
			</div>

			{/* <p>
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


		</div>
	);
};
