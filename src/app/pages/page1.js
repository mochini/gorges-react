import PropTypes from 'prop-types'
import React from 'react'
import Static from '../components/static'

class Page1 extends React.Component {

  static contextTypes = {}

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <Static />
        <Static label="I am blue" color="blue" />
        <Static label="I am green" color="green" />
      </div>
    )
  }

}

export default Page1
