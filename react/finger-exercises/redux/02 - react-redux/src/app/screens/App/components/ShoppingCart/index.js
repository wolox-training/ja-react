import React, { Component, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import actionsCreators from '../../../../../redux/book/actions'
import store from '@redux/store';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends Component {
  state = {
    open: false,
    bookSelected: []
  };

  componentWillMount() {
    this.setState( {bookSelected: store.getState().bookSelected} );
    store.subscribe(() => {
      const { bookSelected } = store.getState();
      this.setState({ bookSelected });
    });
  }

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const bookSelected = this.state.bookSelected;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{bookSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {bookSelected.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

const addItem = itemId => {
  store.dispatch(actionsCreators.addItem(itemId));
};

const removeItem = itemId => {
  store.dispatch(actionsCreators.removeItem(itemId));
};

export default (ShoppingCart);
