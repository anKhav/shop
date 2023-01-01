import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "./routes";
import {useSelector} from "react-redux";

const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    useEffect(() => {
    },[isAuth])
    const {user} = useSelector(state => state.user)
    const role = user ? user.role : false
    console.log(role)
    console.log(localStorage)
    console.log(user)
    console.log(isAuth)

    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route key={Math.random()} path={path} element={element} exact/>
            )}
            {role === "ADMIN" ? adminRoutes.map(({path, element}) =>
                <Route key={Math.random()} path={path} element={element} exact/>
            ) : false}
            {publicRoutes.map(item => <Route key={Math.random()} path={item.path} element={item.element} exact/>)}
        </Routes>
    );
};

export default AppRouter;