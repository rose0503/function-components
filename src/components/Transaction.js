import React, { Component } from "react";

class Transaction extends Component {
  render() {
    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-between">
                <h2 className="mb-4"> Thuê sách    </h2>
                <a className="h-25 btn btn-primary btn-md" 
                href="/transactions/create" role="button" aria-pressed="true">Thêm mới</a>
            </div>
        <div className="table-responsive">
            <table className="table table-hover" style={{width: '100%'}}>
                <thead className="thead-light">
                    <tr>
                        <th>Người thuê</th>
                        <th>DS sách  </th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trịnh Quốc Việt</td>
                        <td>
                            <div>
                                <span>-</span>
                                <span>Tôi đi code chơi</span>
                            </div>
                            <div>
                                <span>-</span>
                                <span>Đường đời</span>
                            </div>
                        </td>
                        <td> 
                            <a className="btn btn-info" 
                            href="/">Hoàn thành</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        )
  }
}

export default Transaction;
