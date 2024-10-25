import { configureStore } from '@reduxjs/toolkit';
import { superheroesReducer } from './superheroes/superheroesSlice';

export const store = configureStore({ reducer: { superheroes: superheroesReducer } });
