import React, { Component } from 'react';
import Header from './Header/Header';
import styles from './styles.css'

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Header />
      </div>
    );
  }
}
