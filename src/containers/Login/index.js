import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/loginActions'
import { LoginForm } from './components/loginForm'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'Luke Skywalker',
            password: '19BBY'
        }
    }
    componentWillReceiveProps({ login }) {
        const { isLoggedIn } = login;
        if (isLoggedIn) {
            this.redirectToPlanets(this.props)
        }
    }
    handleChange = (userData) => {
        this.setState(userData)
    }
    redirectToPlanets = ({ history }) => {
        return history.push('/')
    }
    handleLogin = ({ userName, password }) => {
        this.props.loginUser({ userName, password })
    }
    render() {
        const { login } = this.props
        return (<LoginForm handleLogin={this.handleLogin} userData={this.state} handleChange={this.handleChange} showLoading={login.showLoading} />)
    }
}

const mapStateToProps = ({ login }) => {
    return {
        login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userData) => { dispatch(loginUser(userData)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)