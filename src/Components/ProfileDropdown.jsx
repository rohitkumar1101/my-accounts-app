import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDropDown } from '../actions/profile_dropdown'
import '../scss/dropdown.scss'


const ProfileDropdown = ({id}) => {
    const users = useSelector(state => state.usersData.users)
    const dispatch = useDispatch()

    const random = Math.floor(Math.random() * 9); 
    const onClick = () => {
        dispatch(toggleDropDown())
        console.log("TDD")
    }
    return (
            <div className="profile-dropdown">
                <img src={ users[id].profilepicture } alt="profile" />
                <li> {users[id].name} </li>
                <li> {users[id].email} </li>
                <hr />
                <div className="user-list">
                    <img src={ users[random].profilepicture } alt="profile" />
                    <h6> {users[random].name} </h6>
                </div>
                <hr />
                <div className="user-list">
                    <img src={ users[random+1].profilepicture } alt="profile" />
                    <h6> {users[random+1].name} </h6>
                </div>
                <hr />
                <a onClick={() => onClick()} href={`${process.env.PUBLIC_URL}/`} className="btn">Sign Out</a>
            </div>
    )
}

export default ProfileDropdown
