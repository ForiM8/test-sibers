import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./error-element";
import { Layout } from "./layout";
import { Register } from "../../pages/register/register";



const authPages = [
    //   {
    //     path: "/profile",
    //     Component: Profile,
    //   },

];

const notAuthPages = [
    {
        path: "/",
        Component: Register,
    }
];

export const getRoutes = (isAuth) => {
    return createBrowserRouter([
        {
            Component: Layout,
            errorElement: <ErrorElement />,
            children: [
                {
                    path: "/",
                    Component: Register,
                },

                ...(isAuth ? authPages : notAuthPages),
            ],
        },
    ]);
};
