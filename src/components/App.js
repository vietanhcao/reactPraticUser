import React, { Component } from 'react';

import '../components/App';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataU from "./data.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm : true,
      data: dataU,
      searchText: ''
    }

  }
  getTextSearch(data){
    this.setState({
      searchText: data
    });
  }
  getDataNewUser(object){
    const item = Object.assign({}, object);
    this.state.data.push(item);
    this.setState({
      data: this.state.data
    })
  }
  editUser(){
    console.log('da ket noi');
    
  }
  doiTrangthai(){
      this.setState({ hienthiForm: !this.state.hienthiForm});
  }
  render() {
    let ketqua = this.state.data.filter( item => item.name.indexOf(this.state.searchText) !== -1);
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search trangthai={this.doiTrangthai.bind(this)} hienthiForm={this.state.hienthiForm}
                getTextSearch={this.getTextSearch.bind(this)} />
              <div className="col-12">
                <hr />
              </div>
              <TableData data={ketqua} editUser={this.editUser.bind(this)} />
              <AddUser hienthiForm={this.state.hienthiForm} addUser={this.getDataNewUser.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
