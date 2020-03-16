import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import ProfileHeader from './ProfileHeader'
import '../css/posts.css'
import ProfileDropdown from './ProfileDropdown'


class Posts extends Component {

    componentDidMount(){
        
    }
    render() {
        const { users, posts, comments, activity, hidden } = this.props
        const profileid = this.props.match.params.id
        const id = profileid - 1

        const num = Math.floor(Math.random() * 99);
        
        //Displaying the posts
        let userPosts = posts.map((post, index) => {
            if( profileid == post.userId ){
                return (
                    <div key={index} className="card">
                        <div className="posts-header">
                            <img src={ users[id].profilepicture } alt="profile" />
                            <div className="center-align">
                                <h5> { users[id].name }</h5>
                                <p>{post.time}</p>
                            </div>
                        </div>
                        <div className="post-image">
                            <img src={ post.image } alt="post" />
                        </div>
                        <li>{post.title}</li>

                        <div className="comment-card">
                            {
                                post.userId == comments[index].userId ?
                                <div>
                                    <img src={ comments[num].profilePicture } alt="profile" />
                                    <div className="center-align">
                                        <h5>{ users[comments[num].userId -1].name }</h5>
                                        <h6>{ comments[num].time }</h6>
                                    </div>
                                    <h6 className="time"> { users[comments[num].userId -1].email } </h6>
                                    <p> {comments[num].body} </p> 
                                </div>
                                    : 'No Comment Found'
                            }
                        </div>
                    </div>
                )
            }
        })

        //Displaying the Recent Activities
        let userActivity = activity.map((act, index)=>{
            return (
                <div key={index} className="activity-data">
                    {
                        act.activity == "uploaded post" ?
                        <img src={ act.profilePicture } alt="profile" />
                        : ''

                    }
                    <h5>{ users[act.userId - 1].name}</h5>
                    <p>{ act.activity}</p>
                    <h6>{ act.time.split(":")[2] }</h6> 
                    <h6>{ act.time.split(":")[1] + ":" }</h6> 
                </div>
            )
        })
        return ( 
            <div>
                <div className="flex-container">
                    <div className="sidebar-profile">
                        <Sidebar id={this.props.match.params.id} />
                    </div>

                    <div className="posts-content">
                        <h4>Posts</h4>
                        <ProfileHeader id={id} />
                        <hr /> 
                        { hidden ? null : <ProfileDropdown id={id} /> }

                        <div className="posts-body">
                            <div className="posts">
                                {userPosts}
                            </div>

                            <div className="activity">
                                <div className="card">
                                    <h4>Recent Activities</h4>
                                    {userActivity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
    posts: state.postsData.posts,
    comments: state.commentsData.comments,
    activity: state.activityData.recentActivity,
    hidden: state.dropdown.hidden,

})
export default connect(mapStateToProps)(Posts)