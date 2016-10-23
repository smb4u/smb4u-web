import React, { PropTypes } from 'react';
import { RIEInput, RIETextArea, RIENumber, RIESelect } from 'riek';

const InventoryView = ({ inventory, changeText, categories }) => (
  <ul>
  {inventory.map((item, index) => (
    <li key={index}>
      <img
        className="clothing"
        src={item.url}
      />
      <div className="description">
      <p>Category:
        <RIESelect
          value={item.category}
          propName={'category'}
          change={(textObj) => changeText(textObj)}
          options={categories}
        />
      </p>
      <p>QRCode: {item.QRCode}</p>
      <p>Description:
        <RIEInput
          value={item.description}
          propName={'description'}
          change={(textObj) => changeText(textObj, item.QRCode)}
        />
      </p>
      <p>Price: {item.price}</p>
      </div>
    </li>
  ))
  }
  </ul>
);

InventoryView.propTypes = {
  inventory: PropTypes.array.isRequired,
  changeText: PropTypes.func,
};

export default InventoryView;
