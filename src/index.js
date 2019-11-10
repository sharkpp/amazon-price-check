"use struct";

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css';
//import './dark-theme.css';
import './index.css';

import App from './App';

import('./dark-theme.css')
  .then(() => { })
  .catch(err => { });

const matchUrl = /https[a-zA-Z0-9%_.-]+/;

const queryParams = window.location.search.split(/[?&]/).reduce((r, param) => {
  const [ key, value ] = (/^([^=]+)=(.*)/.exec(param)||[]).splice(1);
  param && (r[key] = decodeURI(value));
  if ('text' == key) {
    r['url']  = unescape(matchUrl.exec(r[key]));
    r['desc'] = unescape(r[key].replace(matchUrl, '').replace(/\+/g, ' '));
  }
  return r;
}, {});

const models = {
};

ReactDOM.render(<App queryParams={queryParams} />, document.getElementById('root'));

// アプリをオフラインで動作させてより速くロードしたい場合は、以下で unregister() を
// register() に変更できます。これにはいくつかの落とし穴があります。
// サービスワーカーの詳細: https://bit.ly/CRA-PWA

serviceWorker.register();

// 要求スペック
//   config#onUpdate(registration);
//   config#onSuccess(registration);
// serviceWorker.register(config);
