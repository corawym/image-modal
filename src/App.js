import React, { Component } from 'react';
import Grids from'./components/Grids';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      showModal : false,
      modalItem : null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
      return response.json();
    }).then(jsonData => {
      return this.setState({data: jsonData})
    })
  }

  gridItemClick = (e, item) => {
    this.setState({showModal: true, modalItem: item})
  }

  render() {

    return (
      <div className="App">
        <Grids gridData={this.state.data} gridItemClick={this.gridItemClick}/>
        {this.state.showModal && <Modal modalItem={this.state.modalItem}/>}
      </div>
    );
  }
}

export default App;
