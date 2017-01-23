import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/App.css';
import { Button } from 'react-bootstrap';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {
  render() {
    return (
      <div styleName="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div styleName="notice">Please edit <code>src/components/Main.js</code> to get started!
        </div>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default CSSModules(AppComponent, styles);
