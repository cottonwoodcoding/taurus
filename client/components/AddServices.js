import React from 'react';
import { connect } from 'react-redux';

class AddServices extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState( (state) => {
      return { edit: !state.edit }
    });
  }

  render() {
    let { serviceCategory = {} } = this.props;
    return (
      <div>
        <h2 className="center">{serviceCategory.name}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { serviceCategory: state.serviceCategories.find( c => c.id === parseInt(props.params.id) ) }
}

export default connect(mapStateToProps)(AddServices);
