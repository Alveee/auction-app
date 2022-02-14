import React from "react";
import './../scss/login.scss';

const Login = () => {
    return (
        <div className="container">
            <main className="form-signin text-center">
                <form>
                    <h1 className="h3 fw-normal">Auction App</h1>
                    <span className="text-muted mb-3"><small>Please sign in</small></span>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    );
}

export default Login;