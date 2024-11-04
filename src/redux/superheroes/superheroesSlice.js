import { createSlice } from '@reduxjs/toolkit';
import {
  getSuperheroes,
  deleteSuperhero,
  createSuperhero,
  getSuperheroById,
  updateSuperhero,
  createSuperheroImage,
  deleteSuperheroImage,
} from './operations';
import * as superheroReducers from '../../utils/reduxActionHandlers/superheroesActionHandlers';

const initialState = { items: [], isLoading: false, isDeleting: false, currentSuperheroId: null, error: null };

const superheroesSlice = createSlice({
  name: 'superheroes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getSuperheroes.pending, superheroReducers.handleGetSuperheroesPending)
      .addCase(getSuperheroes.fulfilled, superheroReducers.handleGetSuperheroesFulfilled)
      .addCase(getSuperheroes.rejected, superheroReducers.handleGetSuperheroesRejected)
      .addCase(getSuperheroById.pending, superheroReducers.handleGetSuperheroByIdPending)
      .addCase(getSuperheroById.fulfilled, superheroReducers.handleGetSuperheroByIdFulfilled)
      .addCase(getSuperheroById.rejected, superheroReducers.handleGetSuperheroByIdRejected)
      .addCase(deleteSuperhero.pending, superheroReducers.handleDeleteSuperheroesPending)
      .addCase(deleteSuperhero.fulfilled, superheroReducers.handleDeleteSuperheroesFulfilled)
      .addCase(deleteSuperhero.rejected, superheroReducers.handleDeleteSuperheroesRejected)
      .addCase(createSuperhero.pending, superheroReducers.handleCreateSuperheroesPending)
      .addCase(createSuperhero.fulfilled, superheroReducers.handleCreateSuperheroesFulfilled)
      .addCase(createSuperhero.rejected, superheroReducers.handleCreateSuperheroesRejected)
      .addCase(updateSuperhero.pending, superheroReducers.handleUpdateSuperheroesPending)
      .addCase(updateSuperhero.fulfilled, superheroReducers.handleUpdateSuperheroesFulfilled)
      .addCase(updateSuperhero.rejected, superheroReducers.handleUpdateSuperheroesRejected)
      .addCase(createSuperheroImage.pending, superheroReducers.handleCreateSuperheroImagePending)
      .addCase(createSuperheroImage.fulfilled, superheroReducers.handleCreateSuperheroImageFulfilled)
      .addCase(createSuperheroImage.rejected, superheroReducers.handleCreateSuperheroImageRejected)
      .addCase(deleteSuperheroImage.pending, superheroReducers.handleDeleteSuperheroImagePending)
      .addCase(deleteSuperheroImage.fulfilled, superheroReducers.handleDeleteSuperheroImageFulfilled)
      .addCase(deleteSuperheroImage.rejected, superheroReducers.handleDeleteSuperheroImageRejected),
});

export const { setCurrentSuperheroId } = superheroesSlice.actions;
export const superheroesReducer = superheroesSlice.reducer;
