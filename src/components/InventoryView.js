import React, { PropTypes } from 'react';

const InventoryView = ({ inventory }) => (
  // <div className="col s12 m8 l12">
  <ul>
  {inventory.map((item, index) => (
    <li key={index}>
      <img
        className="clothing"
        src={item.url}
      />
      <div className="description">
      <p className="category">Category: {item.category}</p>
      <p>QRCode: {item.QRCode}</p>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
      </div>
    </li>
  ))
  }
  </ul>
  // </div>
);

InventoryView.propTypes = {
  inventory: PropTypes.array.isRequired,
};

export default InventoryView;
