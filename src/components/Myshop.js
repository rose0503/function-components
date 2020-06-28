import React, { Component } from "react";

function Myshop() {
    return (
        <div className="container p-5">
            <a href="/">Go to myshop</a>
            <h5>My Books</h5>
            <div className="row">
                <div className="col-9">
                    <div className="table-responsive">
                        <table className="table table-hover mt-2" style={{width: '100%'}}>
                            <thead className="thead-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Book</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Gio Mua</td>
                                    <td> 
                                        <a className="btn btn-light" href="/">Hoàn Thành</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <div className="col-3">     
              <h5>Add Books </h5>
              <form action="/" method="POST">
                  <label className="col-form-label" htmlFor="book">Chọn sách:</label>
                  <div className="col-sm">
                      <select className="form-control" id="book" name="book" size={4} multiple="multiple">
                          <option value="5eb70304df53d4dbe3e81c09">Tôi đi code chơi</option>
                          <option value="5eb9757d2aa50548d66dc999">Đường đời</option>
                          <option value="5ebc537730e1b25f83ce0e14">Gio Mua</option>
                          <option value="5eb70304df53d4dbe3e81c09">Tôi đi code chơi</option>
                          <option value="5eb9757d2aa50548d66dc999">Đường đời</option>
                          <option value="5ebc537730e1b25f83ce0e14">Gio Mua</option>
                        </select>
                    </div>
                    <button className="btn btn-primary mt-2">Create</button>
                </form>
            </div>
            </div>
        </div>
        )
}


export default Myshop;
