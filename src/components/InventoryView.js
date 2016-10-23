import React, { PropTypes } from 'react';

const InventoryView = ({ inventory }) => (
  <ul>
  {inventory.map((item, index) => (
    <li key={index}>
      <img
        className="clothing"
        src={item.url}
      />
      <p>Category: {item.category}</p>
      <p>QRCode: {item.QRCode}</p>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
    </li>
  ))
  }
  </ul>
);

InventoryView.propTypes = {
  inventory: PropTypes.array.isRequired,
};

export default InventoryView;
