import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDg_OPVPQWHkVN-J8_CjYCdCsNDaY9wWvg'



//create a new component that should produce HTML
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({ videos })
    })
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

//tell React to render HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
