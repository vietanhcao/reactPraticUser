import React, { Component } from 'react';
import TableDetial from './TableDetial';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse} ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((x, index) => <TableDetial id={index + 1} name={x.name} phone={x.phone} 
                                permission={x.permission} editUserClick={this.props.editUser.bind(null, x)}  key={index}
                                changeUserStatus={this.props.changeUserStatus}
                                />)
                        }

    
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;