import React from 'react';
export const LoginForm = (props) => {
    const { userName, password } = props.userData
    const onSubmit = (e) => {
        e.preventDefault();
        props.handleLogin({ userName, password })
    }
    const onChange = (e) => {
        props.handleChange({ [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="card container" style={{ width: 500 }}>
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className=" form-group">
                            <label htmlFor="userName">USER NAME:</label>
                            <input type="text" className="form-control" onChange={onChange} value={userName} id="userName" placeholder="Enter User Name" name="userName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" onChange={onChange} value={password} id="password" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
