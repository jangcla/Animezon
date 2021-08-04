import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
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
			<div className="login-form-container">
                <div className='inner-login'>
				<form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 id='form-header'>Sign-In</h1>
					{this.renderErrors()}
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
								/>
							<br />
				
						<input className="session-submit" type="submit" value='Sign-in' />
					</div>
					<br />
				</form>
                <br />
                <button id='login-create'>{this.props.navLink} </button>
                        {/* <form action=id='signin-create-acount'>
                            <input type="submit" value="Create your Animezon account"  id ='login-create'/>
                        </form>      */}
                </div>
			</div>
    )
  }
}

export default LoginForm