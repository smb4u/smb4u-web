import React, { Component } from 'react';
import NavList from '../components/NavList';
import Dashboard from '../components/Dashboard';

const OPTIONS = [
  'Manage Inventory',
  'Analytics',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
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
          />
        </div>
      </div>
    );
  }
}

export default App;
