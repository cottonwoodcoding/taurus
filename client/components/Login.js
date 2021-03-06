import React from 'react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password));
  }

  render() {
    return(
      <div className='container'>
        <h3>Login</h3>
        <form onSubmit={ this.handleSubmit }>
          <input ref='email' type='text' required placeholder='Email' />
          <br />
          <input ref='password' type='password' required placeholder='Password' />
          <br />
          <input type='submit' className='btn' />
        </form>
      </div>
    );
  }
}

export default connect()(Login);
