import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, i) => (
          <li key={`err-${i}`}>
            {err}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <span class="badge" onClick={this.props.closeModal} className="close-x">X</span>
          <br/>
          <br/>
          Welcome to the site, ya dig?
          <br/>
          {this.renderErrors()}
          <div className="session-form">
            <label>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="session-input"
                placeholder="Name"
                />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
                placeholder="Password"
                />
            </label>
            <br/>
            <input className="session-submit"
              type="submit"
              value={this.props.formType}
              />
              {this.props.otherForm}
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm;
