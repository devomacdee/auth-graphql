import React, { Component } from 'react';
import AuthForm from './Authform';
import { graphql } from 'react-apollo';
import query from '../queries/Currentuser';
import mutation from '../mutations/Signup';

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: { query }
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }
  render() {
    return (
      <div>
        <h3>Sign up</h3>
        <AuthForm
          errors={[]}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);
