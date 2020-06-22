import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
        <div className="container p-5">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="text-center">Giỏ hàng</h1>
                    <a className="ml-3 btn btn-light text-info" href="/books/">Xem sách</a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <a className="btn btn-primary" href="/cart/addCart">Thuê sách</a>
                </div>
                <div className="row" />
            </div>
        </div>
        )
  }
}

export default Cart;
