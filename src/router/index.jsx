import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Notfound from "../pages/notFound";
import Rental from "../pages/rental";
import routes from './routes'


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.about} element={<About />} />
                <Route path="*" element={<Notfound />} />
                <Route path={routes.rental(':id')} element={<Rental />} />
                <Route path={routes.returnHome} element={<returnHome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;