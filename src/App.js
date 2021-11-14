import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MoreProducts from "./Pages/MoreProducts/MoreProducts";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/moreproducts">
            <MoreProducts />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <PrivateRoute path="/purchase/:productId">
            <Purchase />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
