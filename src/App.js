import React, { Component } from 'react'
import './App.css'

import Chip from './components/Chip'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Chip color='Primerose Yellow' code={123859} hex='#3D3D3D' />
      </div>
    )
  }
}

export default App
