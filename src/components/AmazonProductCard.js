import React from 'react';
import { useEffect } from'react';
import './AmazonProductCard.css';

import { Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//import MainView from './main/mainView';

function AmazonProductCard({ queryParams }) {
  
  return (
    <Card className="amazon-product-card">
      <Card.Body>
        <Card.Title>{queryParams.desc}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AmazonProductCard;
