import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = ({id}) => {
    return (
        <div>
            <div className="cross">
                <div className="slant-line"></div>
                <div className="slant-line"></div>
            </div>   
            <div className="spacing">
                <Link to={`${process.env.PUBLIC_URL}/profile/${id}`}>Profile</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/posts/${id}`}>Posts</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/gallery/${id}`}>Gallery</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/todo/${id}`}>ToDo</Link> <hr />
            </div>
        </div>
    )
}

export default LeftNav
