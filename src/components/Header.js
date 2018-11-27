import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center   ">
                    <h1 className="display-3">Project quản lý user</h1>
                    <p className="lead">với dữ liêu json</p>
                    <hr className="my-2" />
                </div>
            </div>

        );
    }
}

export default Header;