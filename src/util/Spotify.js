import { SearchBar } from "../Components/SearchBar/SearchBar";

let accessToken;
const clientId = '81b46be0404f496e8b659f7db1684a1d';
const redirectURI = 'http://localhost:3000/'

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    else {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        //clears paramaters and allows us to grab a new access token
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      }
      else {
        const accessURI = `https://accounts.spotify.com/authorize?
                            client_id=${clientId}&response_type=token&
                            scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = accessURI;

      }
    }
  },
  search(searchTearm) {
    const accessToken = Spotify.getAccessToken();
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${searchTearm}`;
    return fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artist,
        album: track.album,
        uri: track.uri
      }))
    })
  }
}

export default Spotify;