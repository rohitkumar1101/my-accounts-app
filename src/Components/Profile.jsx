import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/profile.css'
import Sidebar from './Sidebar'
import map from '../img/map.png'

class Profile extends Component {
    render() {

        const { users } = this.props
        const id = this.props.match.params.id-1
        return (
            <div className="flex-container">
                <div className="sidebar-profile">
                    <Sidebar id={this.props.match.params.id}/>
                </div>
                <div className="profile-content">
                    <h4>Profile</h4>
                    <div className="profile-header">
                        <img src={ users[id].profilepicture } alt="profile" />
                        <h4> { users[id].name }</h4> 
                    </div><hr />

                    <div className="profile-body">
                        <div className="personal-details">
                            <img src={ users[id].profilepicture } alt="profile" />&nbsp;
                            <h4> { users[id].name }</h4>
                            <ul>
                                <li>
                                    <label>Username</label>
                                    <p>{ users[id].username }</p>
                                </li>
                                <li>
                                    <label>e-mail</label>
                                    <p>{ users[id].email }</p>
                                </li>
                                <li>
                                    <label>Phone</label>
                                    <p>{ users[id].phone }</p>
                                </li>
                                <li>
                                    <label>Website</label>
                                    <p>{ users[id].website }</p>
                                </li>
                            </ul>

                            <hr />

                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <label>Name</label>
                                    <p>{ users[id].company.name }</p>
                                </li>
                                <li>
                                    <label style={{marginBottom: "9%", fontSize: "1.1vw"}}>catchphrase</label>
                                    <p>{users[id].company.catchPhrase}</p>
                                </li>
                                <li>
                                    <label style={{marginBottom: "9%"}}>bs</label>
                                    <p>{users[id].company.bs}</p>
                                </li>
                            </ul>

                        </div>

                        <div className="vertical"></div>

                        <div className="address"> 
                            <label id="address-header">Address </label>
                            <ul>
                                <li>
                                    <label>Street</label>
                                    <p>{ users[id].address.street }</p>
                                </li>
                                <li>
                                    <label>Suite</label>
                                    <p>{users[id].address.suite}</p>
                                </li>
                                <li>
                                    <label>City</label>
                                    <p>{users[id].address.city}</p>
                                </li>
                                <li>
                                    <label>Zipcode</label>
                                    <p>{users[id].address.zipcode}</p>
                                </li>
                            </ul>
                            <img src={map} />
                            <p> <span> lat:</span> {users[id].address.geo.lat} <span>lng:</span> {users[id].address.geo.lng}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
})
export default connect(mapStateToProps)(Profile)