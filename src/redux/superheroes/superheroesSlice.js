import { createSlice } from '@reduxjs/toolkit';
import { getSuperheroes } from './operations';
import * as superheroReducers from '../../utils/reduxActionHandlers/getSuperheroActionHandlers/handleGetSuperheroes';

const initialState = { items: [], isLoading: false, isDeleting: false, currentSuperheroId: null, error: null };

const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSuperheroes.pending, superheroReducers.handleGetSuperheroesPending)
      .addCase(getSuperheroes.fulfilled, superheroReducers.handleGetSuperheroesFulfilled)
      .addCase(getSuperheroes.rejected, superheroReducers.handleGetSuperheroesRejected),
});

export const superheroesReducer = superheroesSlice.reducer;
