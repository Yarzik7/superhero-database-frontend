import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from '../../utils/handleErrorAsyncOperation';
import axios from 'axios';

axios.defaults.baseURL = 'https://superhero-database-backend-toy7.onrender.com';

// const getSuperheroes = createAsyncThunk('superheroes/getSuperheroes', async (_, thunkAPI) => {
//   try {
//     const response = await axios.get('/superheroes');
//     return response.data;
//   } catch (e) {
//     const { status, message } = e.toJSON();
//     return thunkAPI.rejectWithValue({ status, message });
//   }
// });

const getSuperheroes = createAsyncThunk('superheroes/getSuperheroes', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const response = await axios.get('/superheroes');
    return response.data;
  }, thunkAPI);
});

export { getSuperheroes };
