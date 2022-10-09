import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useSelector} from "react-redux";

const AppRouter = () => {

    const isAuth = useSelector(state => state.user)

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route key={Math.random()} path={path} element={element} exact/>
            )}
            {publicRoutes.map(item => <Route key={Math.random()} path={item.path} element={item.element} exact/>)}
        </Routes>
    );
};

export default AppRouter;