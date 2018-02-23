import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDg_OPVPQWHkVN-J8_CjYCdCsNDaY9wWvg'

//create a new component that should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

//tell React to render HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
