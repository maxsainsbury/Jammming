import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';

export class App extends React.Component {

  render() {
    
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            //playlist
          </div>
        </div>
      </div>
    );
  }
}
