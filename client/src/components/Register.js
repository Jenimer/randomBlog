import React from 'react'
import { handleRegister } from '../reducers/user'
import { connect } from 'react-redux'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, passwordConfirmation } = this.state

    if (password === passwordConfirmation)
      this.props.dispatch(handleRegister({ email, password, passwordConfirmation }, this.props.history))
    else
      alert('Passwords do not match')
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password, passwordConfirmation } = this.state
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              required
              name='email'
              defaultValue={email}
              placeholder='Email'
              type='email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              name='password'
              defaultValue={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password Confirmation</label>
            <input
              required
              name='passwordConfirmation'
              defaultValue={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment textAlign='center' basic>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }



}


export default connect()(Register);