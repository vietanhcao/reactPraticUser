import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditUpdate.id,
            name: this.props.userEditUpdate.name,
            phone: this.props.userEditUpdate.phone,
            permission: this.props.userEditUpdate.permission,
        }
    }
    isChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    render() {
        console.log(this.state);
        return (
            <div className="card border-dark bg-warning mb-3 mt-3 col-12">
                <div className="card-header text-center">Sửa thông tin user</div>
                <form action="">
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" onChange={this.isChange.bind(this)} name="name"  defaultValue={this.props.userEditUpdate.name} className="form-control" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={this.isChange.bind(this)} name="phone" defaultValue={this.props.userEditUpdate.phone} className="form-control" placeholder="Điên thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission" onChange={this.isChange.bind(this)} defaultValue={this.props.userEditUpdate.permission}  >
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