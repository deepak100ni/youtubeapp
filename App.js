import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./src/component/Dashboard";
import Header from "./src/component/Header";
import Store from "./src/store/Store";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={Store}>
        <RouterProvider router={router} />
    </Provider>
);