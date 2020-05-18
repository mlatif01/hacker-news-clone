import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ selected, onUpdateSelection }) {
  const selections = ['Top', 'New'];

  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        {selections.map((selection) => (
          <li key={selection}>
            <button
              className='btn-clear nav-link'
              style={selection === selected ? { color: '#FFC300' } : null}
              onClick={() => onUpdateSelection(selection)}
            >
              {selection}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateSelection: PropTypes.func.isRequired,
};
