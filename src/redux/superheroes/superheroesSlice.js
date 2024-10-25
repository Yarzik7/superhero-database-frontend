import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], isLoading: false, isDeleting: false, currentSuperheroId: null, error: null };

const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState,
});

export const superheroesReducer = superheroesSlice.reducer;
