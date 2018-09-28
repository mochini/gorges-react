import PropTypes from 'prop-types'
import React from 'react'

class Button extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    on: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    color: 'red',
    on: true
  }

  _handleClick = this._handleClick.bind(this)

  render() {
    const { on } = this.props
    return (
      <div { ...this._getButton() }>
        { on ? 'On' : 'Off' }
      </div>
    )
  }

  _getButton() {
    const { color } = this.props
    return {
      className: `ui ${color} button`,
      onClick: this._handleClick
    }
  }

  _handleClick() {
    this.props.onClick()
  }

}

class ButtonHOC extends React.Component {

  static propTypes = {
    color: PropTypes.string
  }

  state = {
    on: true
  }

  _handleToggle = this._handleToggle.bind(this)

  render() {
    return <Button { ...this._getButton() } />
  }

  _getButton() {
    return {
      color: this.props.color,
      on: this.state.on,
      onClick: this._handleToggle
    }
  }

  _handleToggle() {
    this.setState({
      on: !this.state.on
    })
  }

}

export default ButtonHOC
