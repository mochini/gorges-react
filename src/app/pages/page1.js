import PropTypes from 'prop-types'
import React from 'react'
import Button from '../components/button'

class Page1 extends React.Component {

  static contextTypes = {}

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <Button />
        <Button color="blue" />
        <Button color="green" />
      </div>
    )
  }

}

export default Page1
