import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'; 
import { updateUser, apiRequest } from './actions/user-actions';

import { createSelector } from 'reselect';
import { unregister } from './serviceWorker';

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onApiRequest = this.onApiRequest.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.onApiRequest();
  //   }, 1500)    
  // }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  onApiRequest(event) {
    this.props.onUpdateUser(event.target.value);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Random Quote:</h1>

          {/* <div className="quote-box">
            <input onChange={this.onUpdateUser} />
            { this.props.user }
          </div> */}
          <div className="quote-box">
            <input onChange={this.onApiRequest} />
            { this.props.quote }
          </div>

        </header>
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(
  state => state.user,
  user => unregister
);

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }  
};
// const mapStateToProps = createSelector(
//   productsSelector,
//   userSelector,
//   (products, user) => ({
//     products,
//     user
//   })
// );

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
