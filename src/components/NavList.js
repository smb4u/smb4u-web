import React, { PropTypes } from 'react';

const NavList = ({ options, viewChange }) => (
  <div className="col s12 m6 l3">
    {options.map((option, index) => (
      <div key={index}>
        <button
          onClick={() => viewChange(option)}
        >
          {option}
        </button>
      </div>
    ))
    }
  </div>
);

NavList.propTypes = {
  options: PropTypes.array.isRequired,
  viewChange: PropTypes.func.isRequired,
};

export default NavList;
