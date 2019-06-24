import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';


class Square extends React.Component {

  render() {
    return (
      <button
        type="button"
        className={styles.square}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    )
  }
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Square;
