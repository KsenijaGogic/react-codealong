import React from 'react'
import PropTypes from 'prop-types'
import './Chip.css'

import Card from '../Card'

const Chip = (props) => {
  const styles = {
    'backgroundColor': props.hex
  }

  return (
    <div className='Chip'>
      <Card>
        <div className='Chip-header' style={styles} />
        <div className='Chip-body'>
          <p className='Chip-tm'>Pantone</p>
          <p className='Chip-code'>{ props.code || 'No Code Specified' }</p>
          <p className='Chip-name'>{ props.color || 'No Color Specified' }</p>
        </div>
      </Card>
    </div>
  )
}

Chip.defaultProps = {
  hex: '#D13076'
}

Chip.propTypes = {
  hex: PropTypes.string.isRequired,
  code: PropTypes.string,
  color: PropTypes.string
}

export default Chip
