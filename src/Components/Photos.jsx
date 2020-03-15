import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import '../css/gallery.css'

class Photos extends Component {
    render() {
        const { users, photos} = this.props
        const id = this.props.match.params.id-1
        const albumId = this.props.match.params.albumId

        let photosData = photos.map((photo,index) => {
                if (photo.albumId === Number(id+1)){
                    return (
                        <div key={index} className="photo-gallery">
                            <img src={ photo.url } alt="profile" />
                        </div>
                    )
                }
        })

        return (
            <div className="flex-container">
                <div className="sidebar-profile">
                    <Sidebar id={this.props.match.params.id} />
                </div>
                <div className="gallery-content">
                    <h4>Gallery</h4>
                    <div className="profile-header">
                        <img src={ users[id].profilepicture } alt="profile" />
                        <h4> { users[id].name }</h4> 
                    </div><hr /><br/>

                    <h4>
                        <a href={`${process.env.PUBLIC_URL}/gallery/${id+1}`} style={{color: "Blue"}}>
                            Albums</a> > album{albumId} 
                    </h4>
                    <div className="albums">
                        { photosData }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.usersData.users,
    photos: state.photosData.albums,
    albums: state.albumData.album,
})


export default connect(mapStateToProps)(Photos)