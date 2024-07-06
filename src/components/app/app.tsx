import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { offers, offersCount } = this.props;

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main offers={offers} offersCount={offersCount} />} />
          <Route path="/dev-details" element={<OfferDetails offer={offers[0]} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
