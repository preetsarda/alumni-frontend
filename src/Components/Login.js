import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
function Login() {
    const [logTry,setlogTry]=useState({
        email:"",
        pwd:""
    })
    async function onSubmit() {
        const newlogTry = { ...logTry };
        const Response = await fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newlogTry),
        })
            .catch(error => {
                window.alert(error);
            });
        const res=await Response.json();
        if(res.Log==1){
            window.alert("Login successful")
        }
        else{
            window.alert("Login not found")
        }
        
        setlogTry({
            email: "",
            pwd: "",
        });
    }
    function updatelogTry(value){
        return setlogTry((prev)=>{
            return { ...prev, ...value };
        })
    }
    return (
        <React.Fragment>
            <div className="collapse navbar-collapse justify-content-end" id="NAVIGATION">

                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to={"/profile/institute"} id="Alumni_Profile" className="btn btn-primary">Institute</Link>

                    </li>
                    <li className="nav-item">
                        <Link to={"/profile/alum"} id="Alumni_Profile" className="btn btn-primary">Alumni</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/profile/comp"} id="Alumni_Profile" className="btn btn-primary">Company</Link>
                    </li>
                    <li className="nav-item">
                        <Link id="Login_Profile" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Loginmodal"
                            role="button">Login</Link>
                    </li>

                </ul>
            </div>
            <div className="modal fade" id="Loginmodal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mhtb-5">
                                <i className="fas fa-envelope prefix grey-text" />
                                <input value={logTry.email} onChange={(e) => updatelogTry({ email: e.target.value })} type="email" id="defaultForm-email" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">
                                    Your email
                                </label>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-lock prefix grey-text" />
                                <input value={logTry.pwd} onChange={(e) => updatelogTry({ pwd: e.target.value })} type="password" id="defaultForm-pass" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">
                                    Your password
                                </label>
                            </div>
                            <div>
                                <p>
                                    Don't have an account?<Link to="/signup">Sign UP</Link>
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={onSubmit} id="login_Button" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login;