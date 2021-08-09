import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from './components/root'
import { fetchItem, fetchItems } from "./actions/item_actions";


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchItem = fetchItem;
    window.fetchItems = fetchItems;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store = {store}/>, root);
});