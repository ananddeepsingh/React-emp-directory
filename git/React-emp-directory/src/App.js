import React, { Component } from 'react';
import Results from './Results';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: '',
      data: [],
      showResult: false,
      urlTraffic: false
    }
    // let params = new URLSearchParams(window.location.search);  
    // this.dataFromQueryString = params.get('name');

    // if(this.dataFromQueryString && !this.state.urlTraffic){
    //   this.setState({
    //     urlTraffic: true
    //   })
    //   this.handleSubmit();
    // }
  }

  renderSearch = (e) => {
    console.log(e.target.value)
  }

  handleSubmit(e) {
    
    e.preventDefault();
    fetch("http://api.additivasia.io/api/v1/assignment/employees/" + (this.input.value || this.dataFromQueryString) )
      .then((response) => {
        return response.json();
      })
      .then((jsonObj) => {

        if (jsonObj.length > 0) {
          this.setState({
            searchUser: this.input.value,
            data: jsonObj,
            showResult: true
          });
        }else{
          this.setState({
            searchUser: '',
            data: [],
            showResult: false
          });
        }
        this.input.value = '';
      });
  }


  render() {
    
    return (
      <React.Fragment>
        <form onSubmit={(e) => { this.handleSubmit(e) }} type="post">
          <label>
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Search" />
        </form>

        {this.state.showResult ? <Results data={this.state} /> : null}

      </React.Fragment>
    );
  }
}


export default App;
