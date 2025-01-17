import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    redirect
} from 'react-router-dom';

import App from './app/App';
import MainScreen from './pages/Main';
import TentPosition from './pages/TentPosition';
import ClothsSetup from './pages/ClothsSetup';
import ErrorScreen from './pages/Error';
import LightsMenu from './pages/LightsMenu';
import CustomLighting from './pages/CustomLighting';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App />
        ),
        children: [
            {
                index: true,
                element: <React.Fragment />,
                loader: () => redirect('/main')
            },
            {
                path: '/main',
                index: true,
                element: <MainScreen />
            },
            {
                path: '/tent-position',
                element: <TentPosition />
            },
            {
                path: '/cloths-setup',
                element: <ClothsSetup />
            },
            {
                path: '/lighting',
                element: <LightsMenu/>
            },
            {
                path: '/custom-lighting',
                element: <CustomLighting/>
            }
        ],
        errorElement: <ErrorScreen />
    }
]);

function boot() {
    const htmlElement = document.getElementById('root')!;
    const root = createRoot(htmlElement);
    root.render(
        <RouterProvider router={router} />);
}

boot();
