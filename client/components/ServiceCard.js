import React from 'react';
import defaultService from '../images/default-service.jpg';

class ServiceCard extends React.Component { 
  state = { shown: false };

  toggleShow = () => {
    this.setState({ shown: !this.state.shown });
  }

  render() {
    let sc = this.props.serviceCategory;

    return(
      <div key={sc.id} className="card col s12 m4">
        <div className="card-image waves-effect waves-block waves-light">
          { this.state.shown ? 
            <div style={{ height: '537px', overflowY: 'scroll' }} onClick={this.toggleShow}>
              <h4>Services</h4>
              {sc.services.length ? 
                <ul className='collection'>
                  { sc.services.map( s => {
                    return(
                      <li className='collection-item'>
                        <p>{s.name}</p>
                        <p>{s.description}</p>
                      </li>
                    )
                  })}
                </ul> : null
              }
            </div> :
            <img onClick={this.toggleShow} className="responsive-img" src={ sc.url || defaultService } />
          }
        </div>
        <div className="card-content">
          <span onClick={this.toggleShow} className="card-title grey-text text-darken-4">{sc.name}<i className="fa fa-ellipsis-v right" /></span>
        </div>
      </div>
    );
  }
}

export default ServiceCard;