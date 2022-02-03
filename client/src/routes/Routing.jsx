import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AuthLogin from '../screens/auth/AuthLogin';
import Products from '../screens/dashboard/Products';
import Private from './Private';
import Public from './Public';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="auth">
                        <Route path="auth-login" element={<Public><AuthLogin /></Public>} />
                    </Route>
                    <Route path="dashboard">
                        <Route path="products" element={<Private><Products /></Private>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
