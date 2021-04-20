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


export const UserContext = createContext();

function App() {
  useEffect(() => {
    fetch('https://nameless-fjord-98328.herokuapp.com/')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  const [loginUserDetails, setLoginUserDetails] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    uid: null,
    errMessage: ''
  });

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
            <Route path="/dashboard">
              <Dashboard pageTitle="All Order List">
                <AllOrders />
              </Dashboard>
            </Route>
            <Route path="/all-order">
              <Dashboard pageTitle="All Order List">
                <AllOrders />
              </Dashboard>
            </Route>
            <Route path="/my-orders">
              <Dashboard pageTitle="My Orders">
                <MyOrders/>
              </Dashboard>
            </Route>
            <Route path="/add-new-service">
              <Dashboard pageTitle="Create New Service">
                <CreateService />
              </Dashboard>
            </Route>
            <Route path="/manage-services">
              <Dashboard pageTitle="Manage Services">
                <ManageServices/>
              </Dashboard>
            </Route>
            <Route path="/add-new-admin">
              <Dashboard pageTitle="Add New Admin">
                <AddAdmin/>
              </Dashboard>
            </Route>
            <Route path="/view-admins">
              <Dashboard pageTitle="View Admins">
                <ViewAdmins/>
              </Dashboard>
            </Route>
            <Route path="/create-review">
              <Dashboard pageTitle="Give your honest review">
                <CreateReview/>
              </Dashboard>
            </Route>
            <Route path="/all-reviews">
              <Dashboard pageTitle="All the reviews">
                <CreateReview/>
              </Dashboard>
            </Route>
            <Route path="/booking/service/:serviceId">
              <NavBar />
              <BookingService/>
              <Footer />
            </Route>
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
