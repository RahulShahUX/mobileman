import Header from "./Components/Header/Header";
import MobileList from "./Components/MobileList/MobileList";
import { Route, Routes } from "react-router-dom";
import MobileCompare from "./Components/MobileCompare/MobileCompare";
import Login from "./Components/Login/Login";
import { useLocation } from 'react-router-dom';
import Signup from "./Components/Signup/Signup";

function App() {
  const location = useLocation();
  const isLoggedinPage = location.pathname;
  // console.log("isLoggedinPage", isLoggedinPage, isLoggedinPage == "/");
  return (
    <main>
      {isLoggedinPage != "/signup" && isLoggedinPage != "/login" && isLoggedinPage != "/" ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mobile" element={<MobileList />}></Route>
        <Route path="/mobile-compare" element={<MobileCompare />}></Route>
      </Routes>
    </main>
  )
}

export default App;
