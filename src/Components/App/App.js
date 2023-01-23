
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.SearchResults = [{name: "Hello", artist: "Arcade Fire", album: "Reflector", id: "324563"}];
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div class="App">
          //Add a SearchBar component
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.SearchResults} />
            //add a playsist component
          </div>
        </div>
      </div>
    );
  }
}


export default App;
