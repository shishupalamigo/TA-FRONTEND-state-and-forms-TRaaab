import React from 'react';

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {
        username: '',
        email: '',
        password: '',
        password2: '',
      },
    };
  }
  validateEmail = (email) => {
    // eslint-disable-next-line
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =
          value.length < 5 ? 'Username can not be less than 5 characters' : '';
        break;
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 5 ? 'Password can not be less than 5 characters' : '';
        break;
      case 'password2':
        errors.password2 =
          this.state.password !== value ? "Password doesn't match" : '';
        break;
      default:
        break;
    }

    this.setState({
      errors,
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.state.username + ' ' + this.state.email + ' ' + this.state.password
    );
  };

  render() {
    let { username, email, password, password2 } = this.state.errors;
    return (
      <div className="w-1/2 mx-auto">
        <form
          className="flex flex-col p-10 border"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="username" className="text-lg ">
            Username :{' '}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleInput}
            value={this.state.username}
            className={username && 'error'}
          />
          <span className="mb-8">{username}</span>

          <label htmlFor="email" className="text-lg">
            Email :{' '}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={email && 'error'}
            onChange={this.handleInput}
            value={this.state.email}
          />
          <span className="mb-8">{email}</span>

          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            className={password && 'error'}
            onChange={this.handleInput}
          />
          <span className="mb-8">{password}</span>

          <label htmlFor="password2" className="text-lg">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className={password2 && 'error'}
            value={this.state.password2}
            onChange={this.handleInput}
          />
          <span className="mb-8">{password2}</span>

          <button
            type="submit"
            value="Submit"
            className="p-2 rounded bg-blue-500 text-white font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form2;
