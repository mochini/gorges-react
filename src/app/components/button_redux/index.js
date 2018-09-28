import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import * as actions from './actions'

class ButtonRedux extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    on: PropTypes.bool,
    onToggle: PropTypes.func
  }

  static defaultProps = {
    color: 'red'
  }

  _handleClick = this._handleToggle.bind(this)

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

  _handleToggle() {
    this.props.onToggle()
  }

}

const mapStateToProps = (state, props) => ({
  on: state.button.on
})

const mapDispatchToProps = {
  onToggle: actions.toggle
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRedux)
