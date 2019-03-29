import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Container } from 'semantic-ui-react'
import { updatePost, addPost } from '../reducers/posts'

class PostForm extends React.Component {
  state = { author: '', body: ''}


  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = { ...this.state }
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    closeForm()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { author, body } = this.props
    return (
      <Container>
       
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder='Your name'
            label='author'
            name='author'
            value={author}
            onChange={this.handleChange}
          />
          <Form.TextArea
            placeholder='Write stuff here'
            label='body'
            name='body'
            defaultValue={body}
            style={{ minHeight: 400}}
            onChange={this.handleChange}
          />
          <Button color='green' type='submit'>Post!</Button>
        </Form>
      </Container>
    )
  }
}

export default connect()(PostForm);

