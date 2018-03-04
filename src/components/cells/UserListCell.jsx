import React from 'react';

export default class UsersListCell extends React.Component {

    constructor() {
        super();        
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td><img src={this.props.user.avatar} width="80" /></td>
                <td>{this.props.user.first_name}</td>
                <td>{this.props.user.last_name}</td>
            </tr>
        );
    }
}

