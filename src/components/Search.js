import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="nhap tu khoa" style={{ width: 600 }} />
                        <div className="btn btn-info"> Tim </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;