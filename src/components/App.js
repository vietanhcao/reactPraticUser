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
  doiTrangthai(){
      this.setState({ hienthiForm: !this.state.hienthiForm});
  }
  render() {
    let ketqua = this.state.data.filter( item => item.name.indexOf(this.state.searchText) !== -1);
    console.log(ketqua);
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
              <TableData data={ketqua} />
              <AddUser hienthiForm={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
