import React, { Component } from "react";

class Manageshop extends Component {
  render() {
    return (
      <div className="container p-5">
        <a href="/shops/manageShop/5eb70343df53d4dbe3e81c0a">Quản lý shop</a>
        <h2>Chào bạn đến với Shop QuocViet</h2>
        <div className="table-responsive">
          <table className="table table-hover mt-2" style={{width: '100%'}}>
            <thead className="thead-light">
              <tr>
                <th>STT</th>
                <th>Book</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gio Mua</td>
                <td>
                  <a className="btn btn-light" href="/">add</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        )
  }
}

export default Manageshop;
