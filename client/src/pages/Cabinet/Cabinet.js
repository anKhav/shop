import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {exitUser} from "../../feature/user/userSlice";
import {useNavigate} from "react-router-dom";

const Cabinet = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const exit = async (e) => {
        e.preventDefault()
        await navigate("/")
        dispatch(exitUser())
    }
    return (
        <div>
            Cabinet
            <button onClick={e => exit(e)}>Exit</button>
        </div>
    );
};

export default Cabinet;