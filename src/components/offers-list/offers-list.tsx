import React from 'react';

import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offer) {
    this.setState({
      activeCard: offer,
    });
  }

  render() {
    const { offers, handleClick } = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <OfferCard offer={offer} onCardHover={this.handleCardHover} onTitleClick={handleClick} key={offer.id} />)}
      </div>
    );
  }
}

export default OffersList;
