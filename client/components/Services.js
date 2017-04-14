import React from 'react';
import { setFlash } from '../actions/flash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteServiceCategory, addServiceCategory } from '../actions/serviceCategories';

class Services extends React.Component {
  deleteService = (id) => {
    if (confirm('Really delete category?')) 
      this.props.dispatch(deleteServiceCategory(id));
  }

  addService = (e) => {
    e.preventDefault();
    const name = this.service.value;
    this.props.dispatch(addServiceCategory(name))
    this.form.reset();
  }

  serviceCategories = () => {
    let { serviceCategories } = this.props;
    return serviceCategories.map( c => {
      let { id, name } = c;
      return ( 
        <li key={id} className="collection-item">
          <div>
            <Link to={`/service_categories/${id}`}>
              {name}
            </Link>
						<i 
              style={styles.actions} 
              onClick={() => this.deleteService(id)} 
              className="secondary-content fa fa-2x fa-trash red-text" />
          </div>
        </li>
      )
    });
  }

  render() {
    let { serviceCategories } = this.props;
    return (
      <div className="card col s12 m6">
        <div className="card-content">
          <h5 className="center">Services</h5>
          <p>Add A Service Category</p>
          <form ref={ n => this.form = n } onSubmit={this.addService}>
            <input ref={ n => this.service = n } />
            <button className="black white-text btn">Save</button>
          </form>
          { serviceCategories.length ?
              <ul className="collection"> 
                { this.serviceCategories() }
              </ul> : null
          }
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

const mapStateToProps = (state) => {
  return { serviceCategories: state.serviceCategories }
}


export default connect(mapStateToProps)(Services);
