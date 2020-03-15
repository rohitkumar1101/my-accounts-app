import React, { Component } from 'react'
import { connect } from 'react-redux'


class ProfileDropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.props.hidden = false
    }
    
    render() {
        const { users } = this.props
        const id = this.props.id
        return (
            <div className="profile-dropdown">
                <img src={ users[id].profilepicture } alt="profile" />
                <li> {users[id].name} </li>
                <li> {users[id].email} </li>
                <hr />
                <div className="user-list">
                    <img src={ users[id+1].profilepicture } alt="profile" />
                    <h6> {users[id+1].name} </h6>
                </div>
                <hr />
                <div className="user-list">
                    <img src={ users[id+2].profilepicture } alt="profile" />
                    <h6> {users[id+2].name} </h6>
                </div>
                <hr /><br />
                <a href={`${process.env.PUBLIC_URL}/`} className="btn-lg btn-danger" onClick={this.onClick}>Sign Out</a>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    users: state.usersData.users,
    hiddem: state.dropdown.hidden,
})

export default connect(mapStateToProps)(ProfileDropdown)