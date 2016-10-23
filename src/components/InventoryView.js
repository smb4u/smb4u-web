import React, { PropTypes } from 'react';
import { RIEInput, RIENumber } from 'riek';

const InventoryView = ({ inventory, changeText }) => (
  <ul>
  {inventory.map((item, index) => (
    <li className="something" key={index}>
    <div className="clothingbox">
      <img
        className="clothing"
        src={item.url}
        alt={index}
      />
      </div>
      <div className="right-align description">
        <p>Category:
          <RIEInput
            value={item.category}
            propName={'category'}
            change={(textObj) => changeText(textObj, item.QRCode, 'category')}
          />
        </p>
        <p>QRCode: {item.QRCode}</p>
        <p>Description:
          <RIEInput
            value={item.description}
            propName={'description'}
            change={(textObj) => changeText(textObj, item.QRCode, 'description')}
          />
        </p>
        <p>Price:
          <RIENumber
            value={item.price}
            propName={'price'}
            change={(textObj) => changeText(textObj, item.QRCode, 'price')}
          />
        </p>
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
