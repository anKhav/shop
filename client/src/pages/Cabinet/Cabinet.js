import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../feature/user/userSlice";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../http/axios";

const Cabinet = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    console.log(user)

    const logout = async (e) => {
        e.preventDefault()
        await dispatch(logoutUser())
        navigate("/")
    }
    return (
        <div>
            Cabinet
            <button onClick={e => logout(e)}>Exit</button>
        </div>
    );
};

export default Cabinet;