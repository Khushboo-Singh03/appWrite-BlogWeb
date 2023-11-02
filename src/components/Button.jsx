// import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
    children, 
    // type = "button", 
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = '',
    ...props
 }) => {
  return (
    <>
      <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>{children}</button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node, 
  type: PropTypes.string, 
  bgColor: PropTypes.string, 
  textColor: PropTypes.string, 
  className: PropTypes.string, 
};

export default Button;
