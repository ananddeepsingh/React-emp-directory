import React, { Component } from 'react';
import Results from './Results';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.URL = 'https://jsonplaceholder.typicode.com/users';

    this.state = {
      searchUser: '',
      data: [],
      showResult: false,
      errorOccured: false
    }

    this.invitedUser = false;

    let params = new URLSearchParams(window.location.search);
    this.dataFromQueryString = params.get('name');

    if (this.dataFromQueryString !== '' && this.dataFromQueryString) {
      this.invitedUser = true;
      this.handleSubmit(null);
    }
  }

  handleSubmit(e) {

    let userName;

    if (e) {
      e.preventDefault();
    }

    if (this.input && this.input.value === '') {
      alert('Please Enter Name ')
      this.input.focus();
      return false;
    }

    if (this.invitedUser) {
      userName = this.dataFromQueryString;
      this.invitedUser = false;
    } else {
      userName = this.input.value;
    }

    if (userName) {
      this.renderHTTPCall(userName)

      if (this.input) {
        this.input.value = '';
      }
    }
  }

  renderHTTPCall(userName) {

    fetch(this.URL + userName)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok.');
      }).then((jsonObj) => {
        if (jsonObj.length > 0) {
          this.setState({
            searchUser: userName,
            data: jsonObj,
            showResult: true,
            errorOccured: false
          });
        } else {
          this.setState({
            searchUser: '',
            data: [],
            showResult: false,
            errorOccured: false
          });
        }
      }).catch(function (error) {
        this.setState({
          searchUser: '',
          data: [],
          showResult: false,
          errorOccured: true
        })
        console.log('There has been a problem with your fetch operation: ', error.message);
      }.bind(this));
  }

  render() {
    return (
      <React.Fragment>
        <h1>WELCOME TO EMPLOYEE SEARCH PORTAL</h1>
        <form onSubmit={(e) => { this.handleSubmit(e) }} type="post">
          <label>
            <input type="text" className="search" placeholder="Please Enter Employee Name" ref={(input) => this.input = input} />
          </label>
          <input type="submit" className="searchBtn" value="Search" />
        </form>

        {this.state.showResult ? <Results data={this.state} /> : null}

        <div className="error">{this.state.errorOccured ? 'No Record(s) Found' : null} </div>
      </React.Fragment>
    );
  }
}


export default App;
