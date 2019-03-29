import React from 'react'
import { connect } from 'react-redux'
import { Card, Segment, Container, Dropdown, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { deletePost } from '../reducers/posts'


class Posts extends React.Component {
  state = { author: '', showForm: false }


  handleDelete = (id) => {
    const { dispatch } = this.props
    dispatch(deletePost(id))
  }

  renderPosts = () => {
    const { author } = this.state
    const { posts } = this.props
    let visible = posts;
    if (author)
      visible = posts.filter(p => p.author === author)

    return visible.map(post =>
      <Card key={post.id} textAlign='center'>
        <Card.Content>
          <Card.Header textAlign='center'>
            {post.author}
          </Card.Header>
          <Divider />
          {post.body}
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View Post
          </Link>
          <div>
            <Link onClick={() => this.handleDelete(post.id)}>Delete Post</Link>
          </div>
        </Card.Content>
      </Card>
    )
  }

  authorOptions = () => {
    return this.props.authors.map((a, i) => { return { key: i, text: a, value: a } })
  }

  render() {
    const { author } = this.state
    return (
      <Container fluid >
        <Segment basic size='massive' textAlign='center'>All Posts</Segment>
        <div>
          <Dropdown
            placeholder='Filter by author'
            fluid
            selection
            options={this.authorOptions()}
            onChange={(e, data) => this.setState({ author: data.value })}
            value={author}
          />
          {author && <Button fluid basic onClick={() => this.setState({ author: '' })}>Clear Filter: {author}</Button>}
          <Divider />
          <Card.Group itemsPerRow={4}>
            {this.renderPosts()}
          </Card.Group>
        </div>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  const posts = state.posts
  const authors = [...new Set(posts.map(p => p.author))]
  return { posts, authors }
}

export default connect(mapStateToProps)(Posts);