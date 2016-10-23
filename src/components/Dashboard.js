import React from 'react';
import InventoryView from './InventoryView';
import AnalyticsView from './AnalyticsView';

const Dashboard = ({ currentView }) => {
  let view;
  if (currentView === 'Manage Inventory') {
    view = (
      <InventoryView />
    );
  } else if (currentView === 'Analytics') {
    view = (
      <AnalyticsView />
    );
  }
  return (
    <div className="col s12 m9 l9">
      {view}
    </div>
  );
};

export default Dashboard;
