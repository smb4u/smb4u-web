import React, { Component } from 'react';
import NavList from '../components/NavList';
import Dashboard from '../components/Dashboard';
import INVENTORY from '../helpers/InventoryData';

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
    this.setState({
      inventoryList: INVENTORY.inventory,
    });
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
