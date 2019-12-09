import React from 'react';
import './CheckerServiceLink.css';

import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

//import MainView from './main/mainView';

function CheckerServiceLink({ primary, configurate, checkerService, queryParams, onClick, ...otherProps }) {
  //console.log([primary,checkerService]);
  return (
    <ListGroup.Item
      {...otherProps}
      action
      active={primary}
      //variant={primary?"primary":"secondary"}
      className="checker-link"
      onClick={!queryParams.asin?(()=>onClick(checkerService)):(()=>{return false;})}
      href={queryParams.asin&&checkerService.getUrl(queryParams.asin)}
      target="_blank"
    >
      {configurate
        ? (primary
            ? <FontAwesomeIcon icon={faCheckSquare} fixedWidth size="lg" className="primary-status" />
            : <FontAwesomeIcon icon={faSquare} fixedWidth size="lg" className="primary-status" />)
        : (primary
            ? <FontAwesomeIcon icon={faCheck} fixedWidth size="lg" className="primary-status" />
            : <span className="primary-status fa-fw fa-lg" />)
      }
      {checkerService.name}
    </ListGroup.Item>
  );
}

export default CheckerServiceLink;
