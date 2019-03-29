import React from 'react'
import { connect } from 'react-redux'
import { validateToken } from '../reducers/user'

class FetchUser extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    const { isAuthenticated, dispatch } = this.props
    if (isAuthenticated) this.loaded()
    else dispatch(validateToken(this.loaded))
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.loaded) this.loaded()
  }

  loaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    return this.state.loaded ? this.props.children : null
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.user.id }
}

export default connect(mapStateToProps)(FetchUser)