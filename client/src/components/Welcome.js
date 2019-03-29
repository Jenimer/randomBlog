import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const Welcome = () => (
  <div>
    <Segment textAlign='center' basic size='massive'>Welcome to random blog site!</Segment>
    <Header as='h1' textAlign='center'> Stick in here recent posts and popular posts </Header>
  </div>
)

export default Welcome