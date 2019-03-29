import React from 'react'
import { Segment, Header, Divider, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PostForm from './PostForm'



class UserHome extends React.Component {
  state = { showForm: false }


  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }


  render() {
    const { showForm } = this.state
    const { post = {} } = this.props
    return (

      <Container textAlign='center'>
        <div>
          <Segment basic size='massive' textAlign='center'>
            <Segment size='massive' basic>
              My Profile
          </Segment>
          </Segment>
        </div>
        <div>
          Put the users posts here
        </div>
        <Button color='green' onClick={this.toggleForm}>
          {showForm ? 'Cancel' : 'Create'}
        </Button>
        { showForm ?
          <PostForm {...post} closeForm={this.toggleForm} />
          :
          <div>
            <Header>
              {post.author}
            </Header>

            <Divider />
            {post.body}
          </div>
        }
       
      </Container>
    )

  }
}

export default connect()(UserHome);


