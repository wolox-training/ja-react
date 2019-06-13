import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        originalData: action.payload
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        bookSelected: [...state.bookSelected, action.payload]
      };
    case actions.ADD_ITEM:
      return {
        ...state,
        bookSelected: state.bookSelected.map(book => book.id === action.payload ? {...book, quantity: book.quantity + 1} : book)
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        bookSelected: state.bookSelected.filter(book => book.id !==  action.payload)
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: state.originalData.filter(book => book.name.includes(action.payload))
      };
    default:
      return state;
  }
}

export default reducer;
