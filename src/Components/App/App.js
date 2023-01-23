import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: '1'
      },
      {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: '2'
      },
      {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: '3'
      }],
      playlistName: 'Playlist',
      playlistTracks : [{
        name: 'name4',
        artist: 'artist4',
        album: 'album4',
        id: '4'
      },
      {
        name: 'name5',
        artist: 'artist5',
        album: 'album5',
        id: '5'
      },
      {
        name: 'name6',
        artist: 'artist6',
        album: 'album6',
        id: '6'
      }]
    };
  }

  addTrack(track) {
    for (var id in this.state.playlistTracks.id) {
      if (track.id === id) {
        return;
      }
    }
    this.state.playlistTracks.push(track)
  }

  render() {
    
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}
