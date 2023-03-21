import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./src/component/Body";
import Dashboard from "./src/component/Dashboard";
import Header from "./src/component/Header";
import Watch from "./src/component/Watch";
import Store from "./src/store/Store";

const App = () => {
    return (
        <>
            <Header />
            <Dashboard />
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
                element: <Body />
            },
            {
                path : 'watch',
                element : <Watch/>

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