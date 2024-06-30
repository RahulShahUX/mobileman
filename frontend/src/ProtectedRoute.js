import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute(props) {
    // const result = useContext(AuthContext)
    // console.log("result", result);
    const navigate = useNavigate()
    const { isUserLogged } = useContext(AuthContext);
    return isUserLogged ? props.children : <Navigate to="/login" replace />;
}