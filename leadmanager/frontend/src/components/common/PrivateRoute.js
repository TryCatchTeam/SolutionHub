import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, auth, path }) => {
    return auth.isAuthenticated ? (children) : <Navigate to={ path }></Navigate>;
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default  connect(mapStateToProps)(PrivateRoute);
