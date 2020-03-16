import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/profileDropDown.css'
import { toggleDropDown } from "../actions/profile_dropdown"

class ProfileHeader extends Component {
    render() {
        const { users } = this.props
        const id = this.props.id

        return (
            <div className="profile-header" onClick={this.props.toggleDropDown}>
                <img src={ users[id].profilepicture } alt="profile" />
                <h4> { users[id].name }</h4> 
            </div>
        ) 
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
})


export default connect(mapStateToProps, {toggleDropDown})(ProfileHeader)