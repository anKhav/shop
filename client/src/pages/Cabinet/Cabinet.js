import React, {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, deleteUser, logoutUser} from "../../features/user/userSlice";
import {Link, useNavigate} from "react-router-dom";
import {clearOrders, getAllUserOrders} from "../../features/orders/ordersSlice";
import Orders from "../../components/Orders/Orders";

const Cabinet = () => {
    const fileReader = new FileReader()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    const [selectedImgUrl, setSelectedImgUrl] = useState()
    const [image, setImage] = useState()
    const {user} = useSelector(state => state.user)

    fileReader.onloadend = () => {
        setSelectedImgUrl(fileReader.result)
    }

    const changeHandler = (e) => {
        e.preventDefault()
        const file = e.target.files[0]

        setImage(file)
        fileReader.readAsDataURL(file)
        console.log(file)
    }

    useLayoutEffect(() => {
        dispatch(getAllUserOrders())
        dispatch(checkAuth())
    },[isLogin])


    const orders = useSelector(state => state.orders.orders)



    const logout = async () => {
        navigate("/")
        await dispatch(logoutUser())
        await dispatch(clearOrders())
        setIsLogin(false)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    // const deleteAccount = async () => {
    //     await dispatch(deleteUser(user.id))
    //     await dispatch(clearOrders())
    //     navigate("/")
    //     setIsLogin(false)
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // }
    return (
        // <div className='cabinet'>
        //     <button className='cabinet__btn' onClick={e => logout(e)}>Exit</button>
        //     {/*<button className='cabinet__btn' onClick={e => deleteAccount(e)}>Delete Account</button>*/}
        //     <h2 className='cabinet__title'>{user.email}</h2>
        // </div>
        <div className='cabinet'>
            <div className="cabinet__profile">
                <div className="info">
                    <span className='info__name-surname'>
                        Anton Khavaldzhi
                    </span>
                    <span className="info__email">
                        {user.email}
                    </span>
                    <button className='cabinet__btn' onClick={e => logout(e)}>Exit</button>
                    <Link to='orders'>
                        My Orders
                    </Link>
                </div>
                <div className="avatar">
                    <img src={selectedImgUrl} alt=""/>
                </div>
            </div>
            <div className='cabinet__settings'>
                <input
                    id="input-file"
                    onChange={changeHandler}
                    type="file"
                    placeholder='Product Img'
                />
            </div>
        </div>
    );
};

export default Cabinet;