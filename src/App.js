import React from 'react';
import { useEffect } from'react';
import './App.css';

import { Form } from 'react-bootstrap'

//import MainView from './main/mainView';

function App({ queryParams }) {

  console.log('queryParams',queryParams);
  useEffect(() => {
    console.log('queryParams.',queryParams);
    let m;
    if (m = /https:\/\/www\.amazon\.co\.jp\/dp\/([A-Za-z0-9]+)/.exec(queryParams.url)) {
      const ASIN = m[1];
      //
      //window.location.href = `https://mnrate.com/item/aid/${ASIN}`;
      window.open(`https://mnrate.com/item/aid/${ASIN}`, '_blank');
    }
  }, [queryParams]);
  
  return (
    <div className="App">
{/*<TransitionProgress />*/}
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
