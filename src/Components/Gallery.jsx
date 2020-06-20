import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import ProfileHeader from './ProfileHeader'
import ProfileDropdown from './ProfileDropdown'
import '../scss/gallery.scss'  

class Gallery extends Component {
    render() {
        const { photos, albums, hidden} = this.props
        const id = this.props.match.params.id-1
 
        let albumsData = albums.map((album,index) => {
            return (
                <div key={index} className="gallery">
                    {/* <a href={`${process.env.PUBLIC_URL}/gallery/${id+1}/${album.id}`}> */}
                        <img src={ photos[id+index].url } alt="profile" />
                        <li className="desc">{ album.title} </li>
                    {/* </a> */}
                </div>
            )
        })

        return (
            <div  className="gallery-content">
                <aside>
                    <Sidebar id={this.props.match.params.id} />
                </aside>

                <div className="header">
                    <h4>Gallery</h4>
                    <ProfileHeader id={id} />
                    <hr />
                    { hidden ? null : <ProfileDropdown id={id} /> }
                </div>

                <h4>Albums</h4>
                <div className="albums">
                    { albumsData }
                </div>
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    photos: state.photosData.albums,
    albums: state.albumData.album,
    hidden: state.dropdown.hidden,
})


export default connect(mapStateToProps)(Gallery) 