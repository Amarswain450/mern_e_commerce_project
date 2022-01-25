import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AuthLogin from '../components/auth/AuthLogin';
import Products from '../components/dashboard/Products';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="auth">
                        <Route path="auth-login" element={<AuthLogin />} />
                    </Route>
                    <Route path="dashboard">
                        <Route path="products" element={<Products />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
