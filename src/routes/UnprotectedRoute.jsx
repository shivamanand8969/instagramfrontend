import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UnprotectedRoute = ({ children }) => {
  const location = useLocation();
//   const { authInfo } = useSelector((state) => state.auth);
     const authInfo=false;

  return (
    <>
      {authInfo !== null ? (
        <Navigate to="/app/dashboard" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

UnprotectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnprotectedRoute;
