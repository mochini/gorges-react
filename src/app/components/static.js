import PropTypes from 'prop-types'
import React from 'react'

class Static extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    label: PropTypes.string
  }

  static defaultProps = {
    color: 'red',
    label: 'Click me'
  }

  _handleClick = this._handleClick.bind(this)

  render() {
    const { label } = this.props
    return (
      <div { ...this._getButton() }>
        { label }
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
    const { color } = this.props
    console.log(`${color} button clicked`)
  }

}

export default Static
