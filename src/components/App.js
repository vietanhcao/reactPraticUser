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
      data: dataU
    }

  }
  doiTrangthai(){
      this.setState({ hienthiForm: !this.state.hienthiForm});
  }
  render() {
    return (
      <div>
          <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search trangthai={this.doiTrangthai.bind(this)} hienthiForm={this.state.hienthiForm} />
              <div className="col-12">
                <hr/>
              </div>
              <TableData data={this.state.data} />
              <AddUser hienthiForm={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
