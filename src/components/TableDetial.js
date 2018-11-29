import React, { Component } from 'react';

class TableDetial extends Component {
    showPermission(x) {
        switch (x) {
            case 1:
                return "admin";
            case 2:
                return "Moderator";
            default:
                return "Normal";
        }
    }
    clickEdit(){
        this.props.editUserClick();
        this.props.changeUserStatus();
    }
    render() {
        let { id, name, phone, permission} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{this.showPermission(Number(permission))}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={this.clickEdit.bind(this)} className="btn btn-warning sua"><i className="fa fa-edit    " /> Sửa</div>
                        <div className="btn btn-danger xoa"><i className="fa fa-remove" aria-hidden="true" /> Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}
//65
export default TableDetial;