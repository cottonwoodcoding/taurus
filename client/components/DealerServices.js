import React from 'react';
import { connect } from 'react-redux';

class DealerServices extends React.Component {
  render() {
    return (
      <div className="row">
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { serviceCategories: state.serviceCategories }
}

export default connect(mapStateToProps)(DealerServices);
