import { Route, Routes } from "react-router-dom";

import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Main from "./pages/Homepage.js";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard.js";
import Alliance from "./pages/alliance";

import { AuthState } from "./utils/context/Auth/AuthState.js";
import { PlayerState } from "./utils/context/Player/PlayerState.js";
// import { PrivateRoute } from "./utils/privateRoute";

function App() {
  return (
    <div className="App">
      <AuthState>
        <PlayerState>
          <Header />
          <Routes>
            <Route exact path="/" component={Main} />
            {/* 
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/alliance" component={Alliance} />
            <PrivateRoute path="/user" component={Profile} /> 
            */}
          </Routes>
          <Footer />
        </PlayerState>
      </AuthState>
    </div>
  );
}

export default App;
