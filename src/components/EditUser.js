import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="card border-dark bg-success mb-3 mt-3 col-12">
                <div className="card-header text-center">Sửa thông tin user</div>
                <form action="">
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control" placeholder="Điên thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission"  >
                                <option defaultValue=''>chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-primary btn-block" onClick={this.props.changeUserStatus}
                                value="sửa " />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;