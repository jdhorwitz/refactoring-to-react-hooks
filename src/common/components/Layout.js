import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="grid">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Layout;
