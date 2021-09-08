import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            switches: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoHandler = this.demoHandler.bind(this);
    }

    componentWillUnmount() {
        this.props.receiveErrors([])
        this.update('email')
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

    demoHandler(e) {
        e.preventDefault();
        const user = Object.assign({}, { email: "test", password: "password"})
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
    return this.state.switches === '' ? 
        (<div id='whole-form'>
                    <header id="session-logo">
                <Link to='/' id='link'><img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/login-smile.png?raw=true" id='anime' /></Link>
                    </header>
			<div className="login-form-container">
                <div className='inner-login'>
				<div className="login-form-box">
                    <h1 id='form-header'>Sign-In</h1>
					<div className="login-form">
						<br />
						<p id='form-text'>Email</p>
							<input type="email"
								className="login-input"
                                onChange={this.update('email')}
                                />
                        <br />
                        <br />
                            <input className="session-submit" type="submit" value='Continue' onClick={this.update('switches')}/>
                        <br />
                            <input className="session-submit1" type="submit" value='Sign-in Demo User' onClick={this.demoHandler}/>
                        {this.renderErrors()}
                            <p id='form-text1'>
                                By continuing, you agree to Animezon's <Link to='/error/underdevelopment' id='li'>Conditions of Use</Link> and <Link to='/error/underdevelopment' id='li'>Privacy Notice</Link>.
                            </p>
					</div>
					<br />
				</div>
                <div id='divider'>
                    <h5 id="new-to">New to Animezon?</h5>
                </div>
                <br />
                {this.props.navLink}                        
                </div>
			</div> 
        </div>
    )
    : 
    (<div id='whole-form'>
                    <header id="session-logo">
                        <Link to='/' id='link'><img src="https://i.pinimg.com/originals/13/69/c2/1369c275968915fa376e534f1d0fe891.jpg" id='anime' /></Link>
                    </header>
			<div className="login-form-container">
                <div className='inner-login'>
				<form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 id='form-header'>Sign-In</h1>
					<div className="login-form">
                            <p id='form-text'>{this.state.email}<button id='sign-in-change' value="" onClick={this.update('switches')}>‣Change</button></p>
						<p id='form-text'>Password</p>
							<input type="password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
								/>
							<br />
				
						<input className="session-submit" type="submit" value='Sign-in' />
                        <br />
						<input className="session-submit1" type="submit" value='Sign-in Demo User' onClick={this.demoHandler}/>
                        {this.renderErrors()}
                            <p id='form-text1'>
                                By continuing, you agree to Animezon's <Link to='/error/underdevelopment' id='li'>Conditions of Use</Link> and <Link to='/error/underdevelopment' id='li'>Privacy Notice</Link>.
                            </p>
					</div>
					<br />
				</form>
                <div id='divider'>
                    <h5 id="new-to">New to Animezon?</h5>
                </div>
                <br />
                {this.props.navLink}                        
                </div>
			</div> 
        </div>
    )
  }
}

export default LoginForm
// import React from 'react';
// import { Link, Redirect } from 'react-router-dom'

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.demoHandler = this.demoHandler.bind(this);
//     }

//     componentWillUnmount() {
//         this.props.receiveErrors([]) 
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user);
//     }

//     demoHandler(e) {
//         e.preventDefault();
//         const user = Object.assign({}, { email: "test", password: "password" })
//         this.props.processForm(user);
//     }

//     renderErrors() {
//         return (
//             <ul id='errors'>
//                 {this.props.errors.map((error, i) => (
//                     <li key={`error-${i}`}>
//                         {error}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }

//   render() {
//     return (
//         <div id='whole-form'>
//                     <header id="session-logo">
//                         <Link to='/' id='link'><img src="https://i.pinimg.com/originals/13/69/c2/1369c275968915fa376e534f1d0fe891.jpg" id='anime' /></Link>
//                     </header>
// 			<div className="login-form-container">
//                 <div className='inner-login'>
// 				<form onSubmit={this.handleSubmit} className="login-form-box">
//                     <h1 id='form-header'>Sign-In</h1>
// 					<div className="login-form">
// 						<br />
// 						<p id='form-text'>Email</p>
							// <input type="email"
							// 	value={this.state.email}
							// 	onChange={this.update('email')}
							// 	className="login-input"
                            //     />
// 						<br />
// 						<p id='form-text'>Password</p>
// 							<input type="password"
// 								value={this.state.password}
// 								onChange={this.update('password')}
// 								className="login-input"
// 								/>
// 							<br />
				
// 						<input className="session-submit" type="submit" value='Sign-in' />
//                         <br />
// 						<input className="session-submit1" type="submit" value='Sign-in Demo User' onClick={this.demoHandler}/>
//                         {this.renderErrors()}
// 					</div>
// 					<br />
// 				</form>
//                 <div id='divider'>
//                     <h5 id="new-to">New to Animezon?</h5>
//                 </div>
//                 <br />
//                 {this.props.navLink}                        
//                 </div>
// 			</div> 
//         </div>
//     )
//   }
// }

// export default LoginForm