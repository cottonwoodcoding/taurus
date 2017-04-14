import React from 'react';
import { connect } from 'react-redux';
import defaultService from '../images/default-service.jpg';
import ServiceCard from './ServiceCard';

class DealerServices extends React.Component {
  
  displayServiceCategories = () => {
    let cards = [];
    let rows = [], size = 3;

    while (this.props.serviceCategories.length > 0)
      rows.push(this.props.serviceCategories.splice(0, size));

    rows.forEach((row, i) => {
      cards.push(<div key={`row-${i}`} className='clearfix'></div>);
      row.forEach( sc => {
        cards.push(<ServiceCard key={sc.id} serviceCategory={sc} />);
      });
    });
    return cards;
  }

  render() {
    return (
      <div className="row">
        <h3 className='center'>Our Services</h3>
        { this.displayServiceCategories() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { serviceCategories: state.serviceCategories }
}

export default connect(mapStateToProps)(DealerServices);
