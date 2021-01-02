import React from 'react';
import './AmazonProductCard.css';

import { Card } from 'react-bootstrap';

//import MainView from './main/mainView';

function AmazonProductCard({ queryParams }) {
  
  return (
    <Card className="amazon-product-card">
      <Card.Body>
        <Card.Title>{queryParams.desc}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{queryParams.asin}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default AmazonProductCard;
