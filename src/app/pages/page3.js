import ButtonRedux from '../components/button_redux'
import PropTypes from 'prop-types'
import React from 'react'

class Page2 extends React.Component {

  static contextTypes = {}

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <ButtonRedux />
        <ButtonRedux color="blue" />
        <ButtonRedux color="green" />
      </div>
    )
  }

}

export default Page2
