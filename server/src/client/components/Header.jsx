import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log(auth);

  const authButton = auth ? (
    <a href="/api/logout">logout</a>
  ) : (
    <a href="/api/auth/google">login</a>
  );

  return (
    <div>
      <Link to="/">Logo</Link>
      <div>
        <Link to="/users">users</Link>
        <Link to="/admins">admins</Link>
        {authButton}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
