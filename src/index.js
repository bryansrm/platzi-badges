import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// Pages
import BadgeNew from './pages/BadgeNew';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BadgeNew />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();



// const element = document.createElement('h1');
// element.innerHTML = 'Hello Platzi Badges x2';

// const container = document.getElementById('root');
// container.appendChild(element);
