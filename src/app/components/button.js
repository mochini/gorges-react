import PropTypes from 'prop-types'
import React from 'react'

class Button extends React.Component {

  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    color: 'red'
  }

  state = {
    on: true
  }

  _handleClick = this._handleClick.bind(this)

  render() {
    const { on } = this.state
    return (
      <div { ...this._getButton() }>
        { on ? 'On' : 'Off' }
      </div>
    )
  }

  componentDidMount() {
    const { color } = this.props
    console.log(`${color} component did mount`)
  }

  componentDidUpdate(prevProps, prevState) {
    const { color } = this.props
    console.log(`${color} component did update`)
  }

  componentWillUnmount() {
    const { color } = this.props
    console.log(`${color} component will unmount`)
  }

  _getButton() {
    const { color } = this.props
    return {
      className: `ui ${color} button`,
      onClick: this._handleClick
    }
  }

  _handleClick() {
    this.setState({
      on: !this.state.on
    })
  }

}

export default Button
