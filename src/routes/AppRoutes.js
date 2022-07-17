import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {MAIN, PRIVACY, TERMS} from "./const";
import MainPage from "../Pages/MainPage/MainPage";
import Privacy from "../Pages/Privacy/Privacy";
import Terms from "../Pages/Terms/Terms";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={MAIN} element={<MainPage/>}/>
            <Route exact path={PRIVACY} element={<Privacy/>}/>
            <Route exact path={TERMS} element={<Terms/>}/>
        </Routes>
    );
};

export default AppRoutes;