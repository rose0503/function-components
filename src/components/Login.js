import React, { Component } from "react";
import "./style/login.css";

class Login extends Component {
  render() {
    return (
        <div className="container p-5">
        <div className="container mt-2">
          <h2 className="mb-4 d-flex justify-content-center">Login</h2>
          <form action="#" method="POST">
            <div className="form-group row">
              <lable className="col-sm-2 col-form-label" htmlFor="email">Email</lable>
              <div className="col-sm-10">
                <input className="form-control" id="email" type="text" name="email"  />
              </div>
            </div>
            <div className="form-group row">
              <lable className="col-sm-2 col-form-label" htmlFor="password">Password</lable>
              <div className="col-sm-10">
                <input className="form-control" id="password" type="password" name="password" />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="m-auto btn btn-primary mr-3" type="submit">Đăng nhập</button></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
