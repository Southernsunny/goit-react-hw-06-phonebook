import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 'id-1', name: 'Sister Fride', number: '459-12-56' },
    { id: 'id-2', name: 'Nameless King', number: '443-89-12' },
    { id: 'id-3', name: 'Pontiff Sulyvahn', number: '645-17-79' },
    { id: 'id-4', name: 'Abyss Watchers', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
