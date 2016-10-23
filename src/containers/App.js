import React, { Component } from 'react';
import NavList from '../components/NavList';
import Dashboard from '../components/Dashboard';

const OPTIONS = [
  'Manage Inventory',
  'Analytics',
  'Messages',
];

const INVENTORY = {
  inventory: [
    {
      url: 'http://esq.h-cdn.co/assets/cm/15/06/54d430ff518b7_-_esq-jcrew-gingham-shirt-instagram-082114-l33u8h-xl.jpg',
      category: 'Shirt',
      QRCode: 43625789213,
      description: 'Dress shirt',
      price: '$10',
    },
    {
      url: 'http://bananarepublic.gap.com/webcontent/0011/840/678/cn11840678.jpg',
      category: 'Shirt',
      QRCode: 43626459213,
      description: 'Red Chinos',
      price: '$14',
    },
    {
      url: 'http://bananarepublic.gap.com/webcontent/0011/976/860/cn11976860.jpg',
      category: 'Pants',
      QRCode: 48725789213,
      description: 'Blue Jeans',
      price: '$8',
    },
    {
      url: 'http://bananarepublic.gap.com/webcontent/0012/351/892/cn12351892.jpg',
      category: 'Shirt',
      QRCode: 436123789213,
      description: 'Black cotton shirt',
      price: '$6',
    },
    {
      url: 'http://bananarepublic.gap.com/webcontent/0011/880/833/cn11880833.jpg',
      category: 'Shoes',
      QRCode: 43625778913,
      description: 'Brown shoes',
      price: '$29',
    },
    {
      url: 'http://img.shein.com/images/sheinside.com/201503/1426063091502309137.jpg',
      category: 'Jacket',
      QRCode: 43625789213,
      description: 'Black jacket',
      price: '$13',
    },
    {
      url: 'https://www.thokkthokkmarket.com/documents/image/12/1275/TT02--T-Shirt--Red-1275.jpg',
      category: 'Shirt',
      QRCode: 43625789213,
      description: 'Red cotton shirt',
      price: '$11',
    },
    {
      url: 'http://cdn.shopify.com/s/files/1/0851/8326/products/AN1_front_large.png?v=1430945745',
      category: 'Shirt',
      QRCode: 43625789213,
      description: 'White shirt',
      price: '$16',
    },
  ],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Manage Inventory',
    };
    this.renderView = this.renderView.bind(this);
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
            inventory={INVENTORY.inventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
