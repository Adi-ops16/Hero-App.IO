import React from 'react';
import { createBrowserRouter } from 'react-router';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';
import Home from '../pages/Home';
import RootLayout from '../Layout/RootLayout';
import AppDetails from '../Component/AppDetails/AppDetails';
import Error from '../Errors/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <Error></Error>,
        children: [
            { index: true, Component: Home },
            { path: 'apps', Component: Apps },
            { path: 'installation', Component: Installation },
            { path: 'appDetails/:Id', Component: AppDetails }
        ]
    }
])
