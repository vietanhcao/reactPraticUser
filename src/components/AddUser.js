import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai : true
        }
        this.changeTrt = this.changeTrt.bind(this);
    }
    hienThiNut() {
        if (this.state.trangThai){
            return <div onClick={this.changeTrt} className="btn btn-secondary btn-block">Đóng lại</div>
        }else{
            return <div onClick={this.changeTrt} className="btn btn-info btn-block">Thêm mới</div>
        }
    }
    changeTrt(){
        if (this.state.trangThai) {
            this.setState({ trangThai: false})
        }else{
            this.setState({ trangThai: true })
        }
    }
    render() {
        return (
            <div className="col-3">
                {
                    this.hienThiNut()
                }
                <div className="card border-primary mb-3 mt-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Điên thoại" />
                        </div>
                        <div className="form-group">
                            <label htmlFor />
                            <select className="custom-select" name id>
                                <option selected>chọn quyền</option>
                                <option value={1}>admin</option>
                                <option value={2}>moderator</option>
                                <option value={3}>normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-primary btn-block">Thêm mới</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;