import OfferCard from '../offer-card/offer-card.tsx';

const OffersList = ({ offersTitles }) => (
  <div className="cities__places-list places__list tabs__content">
    {offersTitles.map((offerTitle, i) => <OfferCard offerTitle={offerTitle} key={`offer-${i}`} />)}
  </div>
);

export default OffersList;
