import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Header, Divider, Container } from 'semantic-ui-react'
import PostForm from './PostForm'


const styles = {
  pointer: {
    cursor: 'pointer',
    backgroundColor: 'rgb(90, 180, 45)',
    fontColor: 'white'
  }
}



class PostView extends React.Component {
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

        {showForm ?
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
          
            <Segment inverted style={styles.pointer} onClick={this.toggleForm}>
              {showForm ? 'Cancel' : 'Edit'}
            </Segment>
          
        <Segment textAlign='right'>
            <Link to='/posts'>View blogs</Link>
        </Segment>
          
         
      </Container>
    )

  }
}



const mapStateToProps = (state, props) => {
  return { post: state.posts.find(p => p.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(PostView)