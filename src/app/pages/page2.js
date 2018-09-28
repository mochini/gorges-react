import PropTypes from 'prop-types'
import React from 'react'
import ButtonHOC from '../components/button_hoc'

class Page2 extends React.Component {

  static contextTypes = {}

  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <ButtonHOC />
        <ButtonHOC color="blue" />
        <ButtonHOC color="green" />
      </div>
    )
  }

}

export default Page2
