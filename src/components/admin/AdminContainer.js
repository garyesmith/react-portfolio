import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./AdminContainer.css";

const AdminContainer = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    const logoutUrl=window.location.origin+process.env.PUBLIC_URL;

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
    isAuthenticated && (
        <section>
        <article>
            <h3>Welcome back, {user.name}</h3>
            <p>This area is a placeholder for content administration tools, which have yet to be implemented.</p>
            <button onClick={() => logout({ returnTo: logoutUrl })}>
                Log Out
            </button>
        </article>
        </section>
    )
    );
};

export default AdminContainer;