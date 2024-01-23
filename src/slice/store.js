import contactsReducer from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterSlice },
});
