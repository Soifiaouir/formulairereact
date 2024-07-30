import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';

//slice est une partie du code à la quelle l'on souhaite gerer différement du reste de l'application
// creer le store grace auconfigstore
const store = configureStore({
  reducer: {
    user: userReducer //cela signifie que le slice user sera géré par userReducer
  }
});

export default store;