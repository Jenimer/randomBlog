import React from 'react'
import { connect } from 'react-redux'
import { handleLogout } from '../reducers/user'
import { withRouter, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component {
  rightNavItems = () => {
    const { dispatch, user, location } = this.props;
    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/userhome'>
            <Menu.Item
              name='My page'
              id='userhome'
              active={location.pathname === '/userhome'}
            />
          </Link>
          
           <Link to='/posts'>
            <Menu.Item
              name='All Posts'
              id='posts'
              active={location.pathname === '/posts'}
            />
          </Link>

          <Menu.Item
            name='logout'
            onClick={() => dispatch(handleLogout(this.props.history))}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}





export default withRouter(connect(mapStateToProps)(NavBar))
