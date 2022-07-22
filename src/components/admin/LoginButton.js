import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const queryParams = new URLSearchParams(window.location.search);

    let loginFailedMessage='';
    if (typeof queryParams.get('error') != "undefined" && queryParams.get('error')) {
        loginFailedMessage='Log in failed. Please contact your administrator for access.';
    }

    return (
        !isAuthenticated && (
            <section>
                <article>
                    <h1>Portfolio Administration</h1>
                    <div className="login-box">
                        <p>This area is intended for authorized users only.</p>
                        <button onClick={() => loginWithRedirect()}>Log In Now</button>
                        <button onClick={() => window.location.href=process.env.PUBLIC_URL}>Cancel</button>
                        <p className="error">{loginFailedMessage}</p>
                    </div>
                </article>
            </section>
        )
    )

};

export default LoginButton;