import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Profile from './Profile'
// import '../css/homepage.css'
import '../scss/homepage.scss'

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
                    <div key={index} className="single-person">
                        <img src={process.env.PUBLIC_URL + user.profilepicture} alt="Profile" />
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/profile/${user.id}`} onClick={() => this.handleClick(user.id)}>{user.name}</Link>
                        </li>
                        <hr />
                    </div>
                )
            })
        }

        return (
                <div className="wave">

                    <div className="account-card">
                        <div className="account-title">
                            <h3>Select an account</h3>
                        </div>
                        <div className="account-names">
                            {userData}
                        </div>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fill-opacity="1" d="M0,96L48,133.3C96,171,192,245,288,282.7C384,320,480,320,576,272C672,224,768,128,864,80C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg> */}
                    {/* <svg viewBox="0 0 1250 700">
                        <path fill="pink" fillOpacity="1" d="M 0 250 Q 0 400 300 250 Q 400 200 650 300 Q 450 200 250 300 Q 0 400 0 250  "></path>
                    </svg> */}
                </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
})

export default connect(mapStateToProps, { getUsers, getPosts, getComments, getActivities, getAlbums, getPhotos, getToDolist})(Homepage)
