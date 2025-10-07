import React from 'react';
import { createBrowserRouter } from 'react-router';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';
import Home from '../pages/Home';
import RootLayout from '../Layout/RootLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: 'apps', Component: Apps },
            { path: 'installation', Component: Installation },

        ]
    }
])
