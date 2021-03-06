import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './data'
import Albums from './Albums.jsx'

var StaffPicks = React.createClass({
  getInitialState: function() {
    return {albums: data.getStaff()};
  },
  componentWillMount: function() {
    //pauses any music playing when switched to this page
		this.props.pauseOnPageChange();
  },
  render: function() {
    var info=this.state.albums
    return(
      <div className="container-fluid text-center" >

        <img id="laurel-img" src={require('./../images/staff_picks.png')} />
        <br /> <br /><br /> <br />

        <div className="row staff">

          <div className="work col-md-3">
            <Albums className="ambarAlbum" songImg={info.Ambar.cover} songAlbum={info.Ambar.albumTitle} songArtist={info.Ambar.artist} faveTrack={info.Ambar.faveTrack} albumId={info.Ambar.albumId} />
            <img className="nametag" src={require('./../images/ambar_tag.png')} />
          </div>

          <div className="work col-md-3">
            <Albums className="jungAlbum" songImg={info.Jung.cover} songAlbum={info.Jung.albumTitle} songArtist={info.Jung.artist} faveTrack={info.Jung.faveTrack} albumId={info.Jung.albumId} />
            <img className="nametag" src={require('./../images/jung_tag.png')} />
          </div>


          <div className="work col-md-3">
            <Albums className="rubenAlbum" songImg={info.Ruben.cover} songAlbum={info.Ruben.albumTitle} songArtist={info.Ruben.artist} faveTrack={info.Ruben.faveTrack} albumId={info.Ruben.albumId} />
            <img className="nametag" src={require('./../images/ruben_tag.png')} />
          </div>

          <div className="work col-md-3">
            <Albums className="salinaAlbum" songImg={info.Salina.cover} songAlbum={info.Salina.albumTitle} songArtist={info.Salina.artist} faveTrack={info.Salina.faveTrack} albumId={info.Salina.albumId} />
            <img className="nametag" src={require('./../images/salina_tag.png')} />
          </div>
      </div>

      </div>
     )
  }
})

export default StaffPicks;
