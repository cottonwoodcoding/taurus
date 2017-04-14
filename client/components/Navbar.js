import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';
import logo from '../images/inverted-taurus-bull.png';

class MaterialNavbar extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav({ closeOnClick: true });
  }

  componentDidUpdate() {
    $(".button-collapse").sideNav({ closeOnClick: true });
  }

  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  }

  authLinks = () => {
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        [
          <li key="admin"><Link to="/admin">Admin</Link></li>,
          <li key="logout"> <a href='#' onClick={this.logout}>Logout</a> </li>
        ]
      )
    } else {
      return(<li> <Link to='/login'><i className="fa fa-gear" /></Link> </li>);
    }
  }

  links = () => {
    return [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Parts', url: '/parts' },
      { name: 'Contact', url: '/contact' },
    ].map( (nav, i) => {
      let p = this.props;
      let active = nav.url === this.props.pathname ? 'active' : ''
      return (
        <li key={i} className={active}><Link to={nav.url}>{nav.name}</Link></li>
      )
    });
  }

  render() {
    return(
      <header>
        <div>
          <nav className="black">
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                <img style={styles.img} className="responsive-img" src={logo} />
              </Link>
              <a href="#" data-activates="mobile" className="button-collapse"><i className="fa fa-bars" /></a>
              <ul className='right hide-on-med-and-down'>
                { this.links() }
                { this.authLinks() }
              </ul>
              <ul style={styles.sideNav} className="side-nav" id="mobile">
                { this.links() }
                { this.authLinks() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const styles = {
  img: {
    height: '60px',
  },
  sideNav: {
    zIndex: 999,
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(MaterialNavbar);
