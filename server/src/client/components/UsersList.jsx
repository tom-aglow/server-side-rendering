import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => <li key={id}>{name}</li>);
  }

  render() {
    return (
      <div>
        Users list:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
