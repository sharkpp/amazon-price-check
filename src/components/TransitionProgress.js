import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearchDollar } from '@fortawesome/free-solid-svg-icons'

import './TransitionProgress.css'


export default function () {

  return (
    <div className="transition-progress">
      <FontAwesomeIcon className="cart" icon={faShoppingCart} />
        <div className="search-anime">
          <div className="orbit">
            <FontAwesomeIcon className="search" icon={faSearchDollar} />
          </div>
        </div>
      </div>
  );
}
