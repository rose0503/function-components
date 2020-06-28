import React, { Component } from "react";

function User() {
    return (
        <div className="container p-5">
            <div className="container mt-2">
                <div className="d-flex justify-content-between">
                    <h2 className="mb-4">Danh sách user</h2>
                    <a className="h-25 btn btn-primary btn-md" 
                        href="/users/create" role="button" aria-pressed="true">Thêm mới</a>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Avatar</th>
                                <th>Tên</th>
                                <th colSpan={3}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img width={32} 
                                    src="http://res.cloudinary.com/quocviet0503/image/upload/v1589520220/student/261df6ce4fed6780238dc2160a3fcf85.jpg" alt="logo-user"/>
                                </td>
                                <td>Trịnh Quốc Việt</td>
                                <td>
                                    <a className="btn btn-light" 
                                    href="/">Chi tiết</a>
                                </td>
                                {/* <td>
                                    <a className="btn btn-light" 
                                    href="/">Sửa</a>
                                </td>
                                <td>
                                    <a className="btn btn-light" 
                                    href="/">Xóa</a>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
    </div></div></div>
        )
}

export default User;
