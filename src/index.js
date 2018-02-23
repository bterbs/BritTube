import React from 'react'
import ReactDOM from 'react-dom'

//create a new component that should produce HTML
const App = () => {
  return <div>Hi there!</div>
}

//tell React to render HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
