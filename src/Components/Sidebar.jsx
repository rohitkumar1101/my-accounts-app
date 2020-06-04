import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux' 
import styles from '../css/sidebar.module.css'

class Sidebar extends Component {
    render() {
        return ( 
            <div className={styles.sidebar}>
                <Link to={`${process.env.PUBLIC_URL}/profile/${this.props.id}`}>Profile</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/posts/${this.props.id}`}>Posts</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/gallery/${this.props.id}`}>Gallery</Link> <hr />
                <Link to={`${process.env.PUBLIC_URL}/todo/${this.props.id}`}>ToDo</Link>
            </div>
        )
    } 
}

export default Sidebar