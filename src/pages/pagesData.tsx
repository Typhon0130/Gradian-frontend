import { lazy } from 'react';

const Home = lazy(() => import('./home'));

const pagesData: RouterType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    }
]

export default pagesData;