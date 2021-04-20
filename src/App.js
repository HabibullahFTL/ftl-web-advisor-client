import './App.css';
import NavBar from './components/Home/NavBar/NavBar';
import Home from './components/Home/Home/Home';
import Footer from './components/Home/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import CreateService from './components/Dashboard/CreateService/CreateService';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import ViewAdmins from './components/Dashboard/ViewAdmins/ViewAdmins';
import CreateReview from './components/Dashboard/CreateReview/CreateReview';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import BookingService from './components/BookingService/BookingService';
import ViewReviews from './components/Dashboard/ViewReviews/ViewReviews';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loginUserDetails, setLoginUserDetails] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    uid: null,
    errMessage: ''
  });

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch('https://nameless-fjord-98328.herokuapp.com/all-admin')
      .then(res => res.json())
      .then(data => {
        const adminFinding = data.find(admin => admin.email === loginUserDetails.email);
        if (adminFinding) {
          setIsAdmin(true);
        };
      })
  }, [loginUserDetails.email])

  const getDataFromLS = (tokenName) => {
    let data = localStorage.getItem(tokenName);
    if (data) {
      let userData = JSON.parse(data);
      if (userData.isSignIn) {
        setLoginUserDetails(userData);
      }
    }
  }
  return (
    <UserContext.Provider value={[loginUserDetails, setLoginUserDetails]}>
      <Router>
        <div onLoad={() => getDataFromLS('user')}>
          <Switch>
            <PrivateRoute path="/dashboard">
              {
                isAdmin ?
                  <Dashboard pageTitle="All Order List">
                    <AllOrders />
                  </Dashboard> :
                  <Dashboard pageTitle="My Orders">
                    <MyOrders />
                  </Dashboard>
              }
            </PrivateRoute>
            <PrivateRoute path="/all-order">
              <Dashboard pageTitle="All Order List">
                <AllOrders />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <Dashboard pageTitle="My Orders">
                <MyOrders />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/add-new-service">
              <Dashboard pageTitle="Create New Service">
                <CreateService />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/manage-services">
              <Dashboard pageTitle="Manage Services">
                <ManageServices />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/add-new-admin">
              <Dashboard pageTitle="Add New Admin">
                <AddAdmin />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/view-admins">
              <Dashboard pageTitle="View Admins">
                <ViewAdmins />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/create-review">
              <Dashboard pageTitle="Give your honest review">
                <CreateReview />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/all-reviews">
              <Dashboard pageTitle="All the reviews">
                <ViewReviews />
              </Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/service/:serviceId">
              <NavBar />
              <BookingService />
              <Footer />
            </PrivateRoute>
            <Route path="/login">
              <NavBar />
              <Login></Login>
              <Footer />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NavBar />
              <NotFound />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
