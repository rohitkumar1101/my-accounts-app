import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDropDown } from "../actions/profile_dropdown"
import styles from '../css/profileHeader.module.css'

class ProfileHeader extends Component {
    render() {
        const { users } = this.props
        const id = this.props.id

        return (
            <div className={styles.profileHeader} onClick={this.props.toggleDropDown}>
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