import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app.tsx';

const offersData = {
  offersCount: 312,
  offersTitles: [
    'Beautiful &amp; luxurious apartment at great location',
    'Wood and stone place',
    'Canal View Prinsengracht',
    'Nice, cozy, warm big bed apartment'
  ]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={offersData.offersCount}
      offersTitles={offersData.offersTitles}
    />
  </React.StrictMode>
);
