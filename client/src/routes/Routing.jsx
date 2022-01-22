import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AuthLogin from '../components/auth/AuthLogin';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="auth">
                        <Route path="auth-login" element={<AuthLogin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
