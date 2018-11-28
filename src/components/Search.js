import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="nhap tu khoa" style={{ width: 600 }} />
                        <div className="btn btn-info"> Tim </div>
                    </div>
                    <div>
                        <div onClick={this.props.trangthai} className="btn btn-info btn-block">Thêm mới</div>
                        <div onClick={this.props.trangthai}  className="btn btn-secondary btn-block">Đóng lại</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;