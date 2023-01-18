
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = ({isLogged}) => {
  // let auth = { 'token': true}
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
