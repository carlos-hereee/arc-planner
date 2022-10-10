import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./utils/context/AuthContext";
import { ProtectedRoute } from "./utils/ProtectedRoute.js";
import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Landing from "./pages/Landing.js";
import Dashboard from "./pages/dashboard.js";
import Alliance from "./pages/alliance";
import Account from "./pages/Account.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";

function App() {
  const { accessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route element={<ProtectedRoute user={accessToken} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* 
            <ProtectedRoute path="/alliance" element={Alliance} />
            <ProtectedRoute path="/user" element={Profile} /> 
            */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
