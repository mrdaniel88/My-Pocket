import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="text-center mt-5">
            <div className="mt-5 d-flex justify-content-center">
                <div className="card p-5 d-flex flex-column align-items-center">
                    <div className="card-body ">
                        <div className="login-form">
                            <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" required></input>
                            <input type="text" className="form-control mt-3" placeholder="Last Name" aria-label="Last Name" required></input>
                            <input type="email" className="form-control mt-3" placeholder="Email" aria-label="Email" required></input>
                            <input type="password" className="form-control mt-3" placeholder="Password" aria-label="Password" required></input>
                            <button className="accept-button btn mt-4 me-2" type="submit">Save</button>
                            <Link to="/">
                                <button className="cancel-button btn-cancel btn mt-4" type="submit">Cancel</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};