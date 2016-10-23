import React, { PropTypes } from 'react';
import InventoryView from './InventoryView';
import AnalyticsView from './AnalyticsView';
import MessagesView from './MessagesView';

const Dashboard = ({ currentView, inventory }) => {
  let view;
  if (currentView === 'Manage Inventory') {
    view = (
      <InventoryView
        inventory={inventory}
      />
    );
  } else if (currentView === 'Analytics') {
    view = (
      <AnalyticsView />
    );
  } else if (currentView === 'Messages') {
    view = (
      <MessagesView />
    );
  }
  return (
    <div className="col s12 m9 l9">
      {view}
    </div>
  );
};

Dashboard.propTypes = {
  currentView: PropTypes.string,
  inventory: PropTypes.array,
};

export default Dashboard;
