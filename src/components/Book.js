import React, { Component } from "react";
// import "./style/login.css";

class Book extends Component {
    render() {
        const { books } = this.props;

        return (
            <div className="container p-5">
                <div className="div">
                    <div className="d-flex justify-content-between">
                    <h2 className="mb-4">Thư viện sách</h2>
                    <a className="h-25 btn btn-primary btn-md" href="#" role="button" aria-pressed="true">Thêm mới</a>
                    </div>
                    <div className="row">                    
                    {books.length > 0 && books.map((item, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card mb-3" style={{width: '250px'}}>
                            <img className="card-img-top m-1" 
                                style={{width: '200px', height: '250px'}}
                                 alt="Book-image" 
                                 src={
                                    item.coverUrl === "underfine"
                                      ? item.coverUrl
                                      : "https://arm256.com/jspui/image/default-cover-item.jpg"
                                  }/>
                            <div className="card-body"><h5 className="card-title" style={{height: '48px !important'}}>{item.title}</h5>
                                <p className="card-text">
                                </p><div className="text-truncate" style={{width: '180px'}}>
                                <span>{item.description}</span>
                                </div>
                                <p />
                                <div className="row">
                                <a className="btn btn-primary m-1" href="#">Add</a>
                                <a className="btn btn-primary m-1" href="#">Chi tiết</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;