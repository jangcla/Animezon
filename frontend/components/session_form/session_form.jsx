import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
	
  }

	componentWillUnmount() {
		this.props.receiveErrors([])
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  renderErrors() {
    return (
      <ul id='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

	
  render() {
    return (
			<div id="whole-form">

					<header id="session-logo">
				<Link to='/' id='link'><img src="https://i.pinimg.com/originals/13/69/c2/1369c275968915fa376e534f1d0fe891.jpg" id='anime' /></Link>
					</header>
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<h1 id='form-header'>Create account</h1>
						<div className="login-form">
							<br />
							<p id='form-text'>Email</p>  						 
								<input type="text"
									value={this.state.email}
									onChange={this.update('email')}
									className="login-input"
									/>
							<br />
							<p id='form-text'>Password</p>  
								<input type="password"
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
									placeholder='At least 6 characters'
									/>
								<br />
								<p id='form-text'>Re-enter password</p> 
								<input type="password"
									className="login-input"
									/>
							<br />
							<input className="session-submit" type="submit" value='Create your Animezon account' />
						</div>
							{this.renderErrors()}
						<br />
						<div id='divider'/>
						<p id='bottom-signup-text'>Already have an account? {this.props.navLink}</p>	
					</form>
					
				</div>
			</div>
    )
  }
	
}

export default SessionForm;