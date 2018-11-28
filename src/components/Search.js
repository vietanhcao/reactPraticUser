import React, { Component } from 'react';

class Search extends Component {
    kiemtratrangthai(){
        if (this.props.hienthiForm){
            return <div onClick={this.props.trangthai} className="btn btn-info btn-block">Thêm mới</div>;
        }else{
            return <div onClick={this.props.trangthai} className="btn btn-secondary btn-block">Đóng lại</div>;
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="nhap tu khoa" style={{ width: 600 }} />
                        <div className="btn btn-info"> Tim </div>
                    </div>
                    <div>
                        {
                            this.kiemtratrangthai()
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;