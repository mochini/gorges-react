import PropTypes from 'prop-types'
import React from 'react'

class Static extends React.Component {

  static propTypes = {
    one: PropTypes.string,
    two: PropTypes.array,
    three: PropTypes.object,
    four: PropTypes.func
  }

  static defaultProps = {
    one: 'one'
  }

  state = {
    two: 'two'
  }

  _handleClickOne = this._handleClickOne.bind(this)
  _handleClickTwo = this._handleClickTwo.bind(this)

  render() {
    const { one } = this.props
    const { two } = this.state
    return (
      <div>
        <div { ...this._getOne() }>{ one }</div>
        <div { ...this._getTwo() }>{ two }</div>
      </div>
    )
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  _getOne() {
    return {
      onClick: this._handleClickOne
    }
  }

  _getTwo() {
    return {
      onClick: this._handleClickTwo
    }
  }

  _handleClickOne() {
    console.log('One was clicked')
  }

  _handleClickTwo() {
    console.log('Two was clicked')
  }

}

export default Static
