
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";




export default function AuthLayout({ authentication = true }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //! true && false !== true
    // TODO: make it more easy to understand

    //? let authValue = authStatus === true ? true: false

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return <div>AuthLayout</div>;
}

// AuthLayout.propTypes = {
//   authentication: PropTypes.boolean,
// }
