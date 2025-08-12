import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import RootLayout from '../Pages/RootLayout';
import ProjectDetail from '../components/ProjectDetail';

const Route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/project-details/:id',
                Component: ProjectDetail
            }
        ]
    }

])
export default Route;