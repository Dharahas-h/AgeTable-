import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
