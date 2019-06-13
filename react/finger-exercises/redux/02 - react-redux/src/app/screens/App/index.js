import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';
import actionsCreators from '../../../redux/book/actions'

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
    store.dispatch(actionsCreators.getBooks());
  }

  onSearch = value => {
    store.dispatch(actionsCreators.searchBook(value));
  };

  addToCart = item => {
    store.dispatch(actionsCreators.addToCart(item));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart/>
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
