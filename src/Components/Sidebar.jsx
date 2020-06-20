import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import '../scss/sidebar.scss'
import LeftNav from './LeftNav'

const Sidebar = ({id}) =>  {
    const [open, setOpen] = useState(false)

    return ( 
        <div>
            <div className="sidebar">
                <Link to={`${process.env.PUBLIC_URL}/profile/${id}`}>Profile</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/posts/${id}`}>Posts</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/gallery/${id}`}>Gallery</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/todo/${id}`}>ToDo</Link>
            </div>
            <div onClick={() => setOpen(!open)}>
                {
                    open ? 
                    <div className="left-nav">
                        <LeftNav id={id} /> 
                    </div>
                    :
                    <Hamburger open={open} />
                }
            </div>
        </div>
    )
}

export default Sidebar