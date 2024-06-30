import Header from "./Components/Header/Header";
import MobileList from "./Components/MobileList/MobileList";
import { Route, Routes } from "react-router-dom";
import MobileCompare from "./Components/MobileCompare/MobileCompare";
import Login from "./Components/Login/Login";
import { useLocation } from 'react-router-dom';
import Signup from "./Components/Signup/Signup";
import AuthContext from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const isLoggedinPage = location.pathname;
  // console.log("isLoggedinPage", isLoggedinPage, isLoggedinPage == "/");
  const [isUserLogged, setUserLogin] = useState(JSON.parse(localStorage.getItem("isUserLogged")));

  useEffect(()=>{
    localStorage.setItem("isUserLogged", JSON.stringify(isUserLogged))
  }, [isUserLogged])
  console.log("isUserLogged app", isUserLogged)

  const authUser = (data) => {
    setUserLogin(data)
  }

  const unAuthUser = (data) => {
    setUserLogin(data)
  }
  return (
    <AuthContext.Provider value={{ isUserLogged, authUser, unAuthUser }}>
      <main>
        {isLoggedinPage != "/signup" && isLoggedinPage != "/login" && isLoggedinPage != "/" ? <Header /> : ""}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route>
            <Route path="/mobile" element={<ProtectedRoute><MobileList /></ProtectedRoute>}></Route>
            <Route path="/mobile-compare" element={<ProtectedRoute><MobileCompare /></ProtectedRoute>}></Route>
          </Route>
        </Routes>
      </main>
    </AuthContext.Provider>
  )
}

export default App;
