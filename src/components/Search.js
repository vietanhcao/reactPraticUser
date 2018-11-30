import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trunggian :'',
            userObj: {}
        }
    }
    isChange(event){
        console.log(event.target.value);
        this.setState({
            trunggian: event.target.value
        });
    }
    getUserEditInfo(data){
        this.setState({
            userObj: Object.assign({}, data)
        });
        this.props.getUserEditInfoApp(data);
    }
    checkEditFrom(){
        if (this.props.editUserStatus){
            return <EditUser 
            changeUserStatus={this.props.changeUserStatus} 
            userEditUpdate={this.props.userEditUpdate} 
            getUserEditInfo={this.getUserEditInfo.bind(this)}
            />;
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                {
                    this.checkEditFrom()
                }
                
                </div>
                <div className="form-group" >
                    <div className="btn-group">
                        <input type="text" className="form-control" onKeyUp={this.props.getTextSearch.bind(this, this.state.trunggian)} onChange={this.isChange.bind(this)} placeholder="nhập tên cần tìm" style={{ width: 300 }} />
                        <div className="btn btn-info" onClick={this.props.getTextSearch.bind(this, this.state.trunggian)} > Tim </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;