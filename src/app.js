import React from 'react';
import Header from './header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import './login.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import MyFavoriteBooks from './myFavoriteBooks';
import Login from './login';
class App extends React.Component {
  render() {
    return(
      <>
      <div className="body">

        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {(this.props.auth0.isAuthenticated) ? <MyFavoriteBooks/> : <Login/>}
                </Route>
                <Route exact path="/profile">
                {this.props.auth0.isAuthenticated &&
                <Profile />}
                </Route>
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>

      </div>
      </>
    )
  }
}
export default withAuth0(App);