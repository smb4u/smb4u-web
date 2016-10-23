import React, { Component } from 'react';
import NavList from '../components/NavList';
import Dashboard from '../components/Dashboard';
import INVENTORY from '../helpers/InventoryData';
import fetch from 'isomorphic-fetch';

const OPTIONS = [
  'Manage Inventory',
  'Analytics',
  'Messages',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Manage Inventory',
      inventoryList: [],
    };
    this.changeText = this.changeText.bind(this);
    this.renderView = this.renderView.bind(this);
  }
  componentDidMount() {
    this.invokeFunctions();
  }
  changeText(textObj, QRCode, property) {
    // Changes text dynamically for the item
    const inventory = this.state.inventoryList;
    this.state.inventoryList.forEach((item, index) => {
      if (item.QRCode === QRCode) {
        inventory[index][property] = textObj[property];
      }
    });
    this.setState({
      inventoryList: inventory,
    });
  }
  renderView(view) {
    this.setState({
      currentView: view,
    });
  }
  invokeFunctions() {
    if (!this.state.inventoryList.length) {
      this.setState({
        inventoryList: INVENTORY.inventory,
      });
    }
    setInterval(() => {
      const URL = 'http://ec2-35-161-63-144.us-west-2.compute.amazonaws.com:8000/getInventory';

      // $.ajax({
      //   url: URL,
      //   method: 'GET',
      //   headers: {
      //     'Access-Control-Allow-Credentials': true,
      //     'Content-type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   data: {},
      //   mode: 'no-cors',
      //   success: (data) => {
      //     console.log('DATA: ', data);
      //   },
      //   error: (req, status, err) => {
      //     console.log('Error: ', req, status, err);
      //   }
      // });

      // $.get(URL,(result) => {
      //   console.log(result);
      // })


      fetch("http://ec2-35-161-63-144.us-west-2.compute.amazonaws.com:8000/getInventory", {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
        // data: {},
        // credentials: 'same-origin',
      })
      // .then(res => {
      //   console.log('RES: ', res);
      //   // JSON.stringify(res);
      // })
      .then(result => {
        console.log('RESULT: ', result);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });

    }, 1000);
  }
  render() {
    return (
      <div>
        <div className="row">
          <NavList
            options={OPTIONS}
            viewChange={this.renderView}
          />
          <Dashboard
            currentView={this.state.currentView}
            inventory={this.state.inventoryList}
            changeText={this.changeText}
          />
        </div>
      </div>
    );
  }
}

export default App;
