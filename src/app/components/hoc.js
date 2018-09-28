import PropTypes from 'prop-types'
import React from 'react'

class Static extends React.Component {

  static propTypes = {
    on: PropTypes.boolean
  }

  static defaultProps = {
    on: true
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
    console.log('component did mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
  }

  componentWillUnmount() {
    console.log('component will unmount')
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
