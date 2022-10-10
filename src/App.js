import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Homepage from "./pages/Homepage.js";
import Dashboard from "./pages/dashboard.js";
import Alliance from "./pages/alliance";
import { AuthContext } from "./utils/context/AuthContext";
import Account from "./pages/Account.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import PageNotFound from "./pages/PageNotFound.js";
// import { PrivateRoute } from "./utils/privateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* 
            <PrivateRoute path="/dashboard" element={Dashboard} />
            <PrivateRoute path="/alliance" element={Alliance} />
            <PrivateRoute path="/user" element={Profile} /> 
            */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
