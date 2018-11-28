import React, { Component } from 'react';

class AddUser extends Component {

    kiemtratrangthai(){
        if (this.props.hienthiForm){
            return (

                <div className="card border-primary mb-3 mt-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm mới user</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Điên thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" >
                                <option defaultValue={0}>chọn quyền</option>
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
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                    {
                        this.kiemtratrangthai()
                    }

            </div>
        );
    }
}

export default AddUser;