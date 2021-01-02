import React from 'react';
import { useEffect, useState } from'react';
import './App.css';

import { Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

import localforage from 'localforage';

//import MainView from './main/mainView';
import AmazonProductCard from './components/AmazonProductCard';
import CheckerServiceLink from './components/CheckerServiceLink';


const CheckerServiceList = [
//{id: 'mnrate', name: 'モノレート', getUrl: (asin) => `https://mnrate.com/item/aid/${asin}` }, // 2020-06-30 EoS
  {id: 'keepa', name: 'Keepa', getUrl: (asin) => `https://keepa.com/#!product/5-${asin}` },
  {id: 'sakura-checker', name: 'サクラチェッカー', getUrl: (asin) => `https://sakura-checker.jp/search/${asin}` },
];
const CheckerServiceListLookup = CheckerServiceList.reduce((r, checkerService, index) => (r[checkerService.id] = index, r), {});

const KeyConfigPrimaryCheckerService = 'config.primary-checker';

function App({ queryParams }) {
  const [ primaryChecker, setPrimaryChecker ] = useState();
  
  //console.log('queryParams',queryParams);
  useEffect(() => {
    //console.log('queryParams.',queryParams);
    localforage.getItem(KeyConfigPrimaryCheckerService).then((value) => {
      const checkerService = CheckerServiceList[CheckerServiceListLookup[value]];
      if (checkerService) {
        if (queryParams.asin) {
          const url  = checkerService.getUrl(queryParams.asin);
          //window.location.href = url;
          window.open(url, '_blank');
        }
        setPrimaryChecker(checkerService.id);
      }
    }).catch((err) => {
        console.log(err);
    });
  }, [queryParams]);
  
  return (
    <div className="App">
      {queryParams.asin&&<AmazonProductCard queryParams={queryParams} />}
      {!queryParams.asin&&<Card className="config-message">
        <Card.Body>
          優先するサービスを選択してください。
          選んだサービスへ最初に遷移し表示します。
        </Card.Body>
      </Card>}

      <div className="check-service-list">

        <ListGroup variant="flush">
          {CheckerServiceList.map((checkerService) => (
            <CheckerServiceLink
              key={checkerService.id}
              configurate={!queryParams.asin}
              primary={primaryChecker===checkerService.id}
              checkerService={checkerService}
              queryParams={queryParams}
              onClick={(queryParams_) => {
                //console.log(queryParams_);
                localforage.setItem(KeyConfigPrimaryCheckerService, queryParams_.id).then((value) => {
                  setPrimaryChecker(value);
                }).catch((err) => {
                    console.log(err);
                });
              }}
            />
          ))}
        </ListGroup>


        {/*
        <Table responsive>
          <tbody>
            {CheckerServiceList.map((checkerService,i) => (
                <tr key={checkerService.id}>
                  <td>
                    <CheckerServiceLink
                      primary={0==i}
                      checkerService={checkerService}
                      queryParams={queryParams}
                    />
                    </td>
                </tr>
            ))}
          </tbody>
            </Table>*/}
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
