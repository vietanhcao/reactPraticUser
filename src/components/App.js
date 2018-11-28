import React, { Component } from 'react';

import '../components/App';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm : true
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
              <Search trangthai={this.doiTrangthai.bind(this)} />
              <div className="col-12">
                <hr/>
              </div>
              <TableData />
              <AddUser hienthiForm={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
