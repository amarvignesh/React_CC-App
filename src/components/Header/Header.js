import React, {Component } from 'react';
import styles from './header.css';

export default class Header extends Component {

  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div className={styles.header}>
      This is a Header!!
      </div>
    );
  }
}
