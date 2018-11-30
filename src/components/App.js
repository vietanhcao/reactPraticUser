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
      searchText: '',
      editUserStatus: false,
      userEditUpdate: {}
    }
  }
  componentWillMount() {
    if (localStorage.getItem('userData') !== null){
      this.setState({
        data: JSON.parse(localStorage.getItem('userData'))
      });
    }else{
      localStorage.setItem('userData', JSON.stringify(dataU));
    }
  }
  changeUserStatus(){
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
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
  editUser(datauser){
    this.setState({
      userEditUpdate: Object.assign({}, datauser)
    }); 
  }
  doiTrangthai(){
      this.setState({ hienthiForm: !this.state.hienthiForm});
  }
  getUserEditInfoApp(data) {
    this.state.data.forEach((value, key) => {
      if( value.id === data.id){
        value.name = data.name;
        value.phone = data.phone;
        value.permission = data.permission;
      }
    });
  }
  deleteClick(data){
    this.setState({
      data: this.state.data.filter((value, index) => value.id !== data)
    });
  }
  render() {
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    let ketqua = this.state.data.filter( item => item.name.indexOf(this.state.searchText) !== -1);
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search trangthai={this.doiTrangthai.bind(this)} 
                hienthiForm={this.state.hienthiForm}
                getTextSearch={this.getTextSearch.bind(this)}
                editUserStatus={this.state.editUserStatus}
                changeUserStatus={this.changeUserStatus.bind(this)}
                userEditUpdate={this.state.userEditUpdate}
                getUserEditInfoApp={this.getUserEditInfoApp.bind(this)}  />
              <div className="col-12">
                <hr />
              </div>
              <TableData 
              data={ketqua} 
              editUser={this.editUser.bind(this)} 
              changeUserStatus={this.changeUserStatus.bind(this)}
              deleteClick={this.deleteClick.bind(this)}  />
              <AddUser 
              hienthiForm={this.state.hienthiForm} 
              addUser={this.getDataNewUser.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
