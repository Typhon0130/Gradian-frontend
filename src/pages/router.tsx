import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
    const pagesRoutes = pagesData.map((route:RouterType) => {
        return <Route key={route.title} path={`/${route.path}`} element={route.element} />;
    });

    return <Routes>{pagesRoutes}</Routes>
}

export default Router;