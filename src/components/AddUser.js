import React, { Component } from 'react';
import uuidv1 from "uuid/v1";
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }

    isChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
            id: uuidv1()
        });
        
    }
    kiemtratrangthaiButton() {
        if (this.props.hienthiForm) {
            return <div onClick={this.props.trangthai} className="btn btn-secondary btn-block">Đóng lại</div>;
        } else {
            return <div onClick={this.props.trangthai} className="btn btn-info btn-block">Thêm mới</div>;
        }
    }
    kiemtratrangthai(){
        if (this.props.hienthiForm){
            return (
                <div className="card border-primary mb-3 mt-3">
                    <div className="card-header">Thêm mới user</div>
                    <form action="">
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" onChange={this.isChange.bind(this)} className="form-control" placeholder="Tên user" required />
                            </div>
                            <div className="form-group">
                                <input type="number" name="phone" onChange={this.isChange.bind(this)} className="form-control" placeholder="Điên thoại" required />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" name="permission" onChange={this.isChange.bind(this)} required  >
                                    <option defaultValue=''>chọn quyền</option>
                                    <option value={1}  >Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-primary btn-block" 
                                onClick={this.props.addUser.bind(null, this.state)} value="Thêm mới"/>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-lg-3 col-12">

                {
                    this.kiemtratrangthaiButton()
                }

                {
                    this.kiemtratrangthai()
                }
            </div>
        );
    }
}

export default AddUser;