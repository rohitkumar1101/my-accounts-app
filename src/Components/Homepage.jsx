import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import '../css/homepage.css'

import { getUsers } from '../actions/users_action'
import { getPosts, getActivities, getComments } from '../actions/posts_action'
import { getAlbums, getPhotos } from '../actions/gallery_action'
import { getToDolist } from '../actions/todo_action'

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        this.props.getUsers()
        this.props.getPosts()
        this.props.getComments()
        this.props.getActivities()
        this.props.getPhotos()
        this.props.getAlbums()
        this.props.getToDolist()
    }

    handleClick(id){
        return (
            <Profile userID={id} />
        )
    }
    
    render() {
        const { users } = this.props
        let userData = []
        if (users){
            userData = users.map((user, index) => {
                return (
                    <div key={index}>
                        <img src={process.env.PUBLIC_URL + user.profilepicture} alt="Profile" />
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/profile/${user.id}`} onClick={() => this.handleClick(user.id)}>{user.name}</Link>
                        </li>
                        <hr></hr>
                    </div>
                )
            })
        }

        return (
                <div className="wave">
                    {/* <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
                        <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="160" strokeLinecap="round" style={{zIndex: 1}}/>
                    </svg> */}

                    <div className="account-card">
                        <div className="account-title">
                            <h3>Select an account</h3>
                        </div>
                        <div className="account-names">
                            {userData}
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
})

export default connect(mapStateToProps, { getUsers, getPosts, getComments, getActivities, getAlbums, getPhotos, getToDolist})(Homepage)
