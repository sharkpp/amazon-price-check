import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

<Form>
  <div className="mb-3">
    <Form.Check
            type="checkbox"
            label="first radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
  </div>
</Form>

      <pre>{ Object.keys(window.location).map((k) => {
        return `${JSON.stringify(k)}: ${JSON.stringify(window.location[k])}\n`;
      }) }</pre>
    </div>
  );
}

export default App;
