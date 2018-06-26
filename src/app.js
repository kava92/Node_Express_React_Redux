"use strict"

import {createStore} from 'redux';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

//IMPORT ACTIONS
import {addToCart} from './actions/cartActions'
// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function(){
    console.log('current state is : ', store.getState());
})

// STEP 2 create and dispatch actions
store.dispatch({
    type:"POST_BOOK",
    payload: [
        {
            id: 1,
            title: 'Metro 2044',
            describe: 'Fantasy book abaout after apocalypse life',
            price: 33.99
        },
        {
            id: 2,
            title: '1984',
            describe: 'Book about soicety',
            price: 15.99
        },
        {
            id: 3,
            title: 'LOTR',
            describe: 'Book about hoobits(but not only)',
            price: 21.99
        },
    ]
})

// DISPATCH a second action
store.dispatch({
    type:"DELETE_BOOK",
    payload: {id: 1}
})

//UPDATE a book
store.dispatch({
    type:"UPDATE_BOOK",
    payload: {
        id: 2,
        title:'Learn React in 24hs'
    }
})

//---> CART ACTIONS
//ADD to cart
store.dispatch(addToCart([{id: 10}]));