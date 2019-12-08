import React from 'react';
import { useEffect } from'react';
import './App.css';

import { Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

//import MainView from './main/mainView';
import AmazonProductCard from './components/AmazonProductCard';
import CheckerServiceLink from './components/CheckerServiceLink';


const CheckerServiceList = [
  {id: 'mnrate',         name: 'モノレート', getUrl: (asin) => `https://mnrate.com/item/aid/${asin}` },
  {id: 'sakura-checker', name: 'サクラチェッカー', getUrl: (asin) => `https://sakura-checker.jp/search/${asin}` },
];
const CheckerServiceListLookup = CheckerServiceList.reduce((r, checkerService, index) => (r[checkerService.id] = index, r), {});


function App({ queryParams }) {

  console.log('queryParams',queryParams);
  useEffect(() => {
    console.log('queryParams.',queryParams);
    if (queryParams.asin) {
      const ASIN = queryParams.asin;
      //window.location.href = `https://mnrate.com/item/aid/${ASIN}`;
      //window.open(`https://mnrate.com/item/aid/${ASIN}`, '_blank');
    }
  }, [queryParams]);
  
  return (
    <div className="App">
      <AmazonProductCard queryParams={queryParams} />

      <div className="check-service-list">
        <Table responsive>
          <tbody>
            {CheckerServiceList.map((checkerService) => (
                <tr key={checkerService.id}>
                  <td></td>
                  <td>
                    <CheckerServiceLink
                      checkerService={checkerService}
                      queryParams={queryParams}
                    />
                    </td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>

{/*<TransitionProgress />*/}
{/*
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
      <pre>{ Object.keys(queryParams).map((k) => {
        return `${JSON.stringify(k)}: ${JSON.stringify(queryParams[k])}\n`;
      }) }</pre>
      */}
      
    </div>
  );
}

export default App;
