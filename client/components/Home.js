import React from 'react';
import { backGround, bottomSection, shadow } from '../styles/main.scss';

const Home = () => (
  <div className="main">
    <div className={backGround}>
    </div>
    <h4 className="center">
      <a className="black-text" href="tel:8012664420">(801) 266-4420</a>
    </h4>
    <div className={bottomSection}>
      <br />
      <div className="row">
        <div className="col m6 s12">
          <ul className="collection" style={styles.clear}>
            <li className="collection-item" style={styles.clear}>
              <h4 className={`white-text center ${shadow}`}>Over 30 Yrs Experience</h4>
            </li>
            <li className="collection-item" style={styles.clear}>
              <h4 className={`white-text center ${shadow}`}>Solid, Dependable Service</h4>
            </li>
            <li className="collection-item" style={styles.clear}>
              <h4 className={`white-text center ${shadow}`}>Licensed & Insured</h4>
            </li>
            <li className="collection-item" style={styles.clear}>
              <h4 className={`white-text center ${shadow}`}>4645 S 500 W</h4>
            </li>
            <li className="collection-item" style={styles.clear}>
              <h4 className={`white-text center ${shadow}`}>Murray UT, 84123</h4>
            </li>
          </ul>
        </div>
        <div className="col m6 s12">
          <div className="video-container"> 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.0807603096064!2d-111.90768358459623!3d40.672189479336254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528bcabb270509%3A0xf9f1802eee002ebf!2s4645+S+500+W%2C+Murray%2C+UT+84123!5e0!3m2!1sen!2sus!4v1491937353296" 
              width="600" 
              height="450" 
              frameBorder="0" 
              style={{border: '0'}}
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const styles = {
  clear: { background: 'transparent', border: 'none' }
}

export default Home;
