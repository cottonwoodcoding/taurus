import React from 'react';
import { connect } from 'react-redux';
import { addService, deleteService } from '../actions/services';
import { Link } from 'react-router';

class AddServices extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState( (state) => {
      return { edit: !state.edit }
    });
  }
  
  addService = (e) => {
    e.preventDefault();
    let { props: { dispatch, serviceCategory }, name, description } = this;
    dispatch(addService(serviceCategory.id, name.value, description.value));
    this.addForm.reset();
  }

  deleteService = (serviceId) => {
    if(confirm('Really Delete?')) {
      let { serviceCategory: { id } , dispatch } = this.props;
      dispatch(deleteService(id, serviceId));
    }
  }

  addServiceForm = () => {
    return(
      <div>
        <h3>Add New Service</h3>
        <form ref={ n => this.addForm = n } onSubmit={this.addService}>
          <div className='col s12 m6'>
            <input type='text' autoFocus={true} required ref={ n => this.name = n } placeholder='Service Name' />
          </div>
          <div className='col s12 m6'>
            <textarea className='materialize-textarea' required ref={ n => this.description = n } placeholder='Service Description' />
          </div>
          <input type='submit' value='Add New Service' className='btn' />
        </form>
      </div>
    )
  }

  displayServices = () => {
    let services = this.props.serviceCategory.services;
    if(services.length) {
      return services.map( service => {
        let { id, name, description } = service;
        return ( 
          <li key={id} className="collection-item">
            <div>
              <div className='col s12 m6'>
                <h5>Name: {name}</h5>
                <p>Description: {description}</p>
              </div>
              <div className='col s12 m6'>
                <i 
                  onClick={ () => this.deleteService(service.id) }
                  style={styles.actions}  
                  className="fa fa-2x fa-trash red-text"
                />
              </div>
            </div>
          </li>
        );
      });
    } else {
      return(<h5>No Services Yet</h5>)
    }
  }

  render() {
    let { serviceCategory = {} } = this.props;
    return (
      <div className='container'>
        <div className='center'>
          <h2>{serviceCategory.name}</h2>
          <Link to='/admin' className='btn '>Back</Link>
        </div>
        { this.addServiceForm() }
        <div className='center'>
          <h3>Services</h3>
          <ul className='collection'>
            { this.displayServices() }
          </ul>
        </div>
      </div>
    )
  }
}

const styles = {
  actions: {
    cursor: 'pointer',
  }
}

const mapStateToProps = (state, props) => {
  return { serviceCategory: state.serviceCategories.find( c => c.id === parseInt(props.params.id) ) }
}

export default connect(mapStateToProps)(AddServices);
