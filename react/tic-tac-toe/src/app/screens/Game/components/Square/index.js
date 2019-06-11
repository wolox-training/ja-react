import React from 'react';

import styles from './styles.module.scss';


class Square extends React.Component {
  render() {
    return (
      <button type="button"
        className={styles.square}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    )
  }
}

export default Square;
