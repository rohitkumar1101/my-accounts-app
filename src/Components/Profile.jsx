import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import map from '../img/map.png'
import ProfileHeader from './ProfileHeader'
import ProfileDropdown from './ProfileDropdown'

import '../scss/profile.scss'

class Profile extends Component {

    render() {
 
        const { users, hidden } = this.props
        const id = this.props.match.params.id-1
        return (
                <div className="profile-content">
                    <div className="aside">
                        <Sidebar id={this.props.match.params.id}/>
                    </div>

                    <div className="header">
                        <h4>Profile</h4>
                        <ProfileHeader id={id} />
                        <hr />
                        { hidden ? null : <ProfileDropdown id={id} /> }
                    </div>

                    <div className="personal-details">
                        <img src={ users[id].profilepicture } alt="profile" />&nbsp;
                        <h4> {users[id].name}</h4>
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
                                <label>catchphrase</label>
                                <p>{users[id].company.catchPhrase}</p>
                            </li>
                            <li>
                                <label>bs</label>
                                <p>{users[id].company.bs}</p>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="vertical"></div> */}
                    {/* <hr /> */}

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
                            <img src={map} alt="map" />
                            <p> <span> lat:</span> {users[id].address.geo.lat} <span>lng:</span> {users[id].address.geo.lng}</p>
                        </div>

                </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
    hidden: state.dropdown.hidden,
})
export default connect(mapStateToProps)(Profile)