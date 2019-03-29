import React from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../reducers/user'
import { Segment, Button, Header, Form } from 'semantic-ui-react'

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.dispatch(handleLogin({ email, password }, this.props.history))
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              autofocus
              required
              name='email'
              defaultValue={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              required
              name='password'
              defaultValue={password}
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }

}
export default connect()(Login)