import React, { Component } from 'react'
import './App.css'

import Chip from './components/Chip'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      colors: [
        {
          color: 'Primrose Yellow',
          code: '13-0755',
          hex: '#F6D258'
        }
      ],
      newName: 'Pink',
      newCode: '',
      newHex: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e, stateKey) {
    const { value } = e.target

    this.setState({ [stateKey]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { colors, newName, newCode, newHex } = this.state

    const newColor = {
      color: newName,
      code: newCode,
      hex: newHex
    }

    const colorsCopy = Array.from(colors)
    colorsCopy.unshift(newColor)

    this.setState({ colors: colorsCopy })
  }

  render () {
    const { colors, newName, newCode, newHex } = this.state

    return (
      <div className='App'>
        <form>
          <label htmlFor='name'>Name of Color</label>
          <input name='name' value={newName} onChange={(e) => this.handleChange(e, 'newName')} />

          <label htmlFor='code'>Pantone Code</label>
          <input name='code' value={newCode} onChange={(e) => this.handleChange(e, 'newCode')} />

          <label htmlFor='hex'>Hex Code</label>
          <input name='hex' value={newHex} onChange={(e) => this.handleChange(e, 'newHex')} />

          <button type='submit' onClick={(e) => this.handleSubmit(e)}>Add New Color</button>
        </form>
        {
          colors.map((color, index) => {
            const { color: name, code, hex } = color

            return (
              <Chip key={index} color={name} code={code} hex={hex} />
            )
          })
        }
      </div>
    )
  }
}

export default App
