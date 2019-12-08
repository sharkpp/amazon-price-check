import React from 'react';
import { useEffect } from'react';
import './CheckerServiceLink.css';

import { Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//import MainView from './main/mainView';

function CheckerServiceLink({ checkerService, queryParams }) {
  
  return (
    <Button
      variant="link"
      className="checker-link"
      href={checkerService.getUrl(queryParams.asin)}
      target="_blank"
    >
      {checkerService.name}
    </Button>
  );
}

export default CheckerServiceLink;
