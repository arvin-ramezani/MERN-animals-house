import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAnimals, fetchAnimalsByQuery } from '../../API/publicApi';
import { likeAnimal } from '../../API/userApi';
import { RootState } from '../../app/store';
import { IAnimalsState } from '../../interfaces/interfaces';

const initialState: IAnimalsState = {
  animals: [],
  status: 'idle',
  pagination: {
    totalPages: 0,
  },
};

// Fetch All Animals
export const fetchAnimalsAsync = createAsyncThunk(
  'animals/fetchAnimalsAsync',

  async (query: string) => {
    const response = await fetchAnimals(query);

    return response.data;
  }
);

// Fetch Animals By Query
export const fetchAnimalsByQueryAsync = createAsyncThunk(
  'animals/fetchAnimalsByQueryAsync',

  async (query: string) => {
    const response = await fetchAnimalsByQuery(query);

    return response.data;
  }
);

// Like Animal
export const likeAnimalAsync = createAsyncThunk(
  'animals/likeAnimalAsync',

  async (animalId: { animalId: string }) => {
    const response = await likeAnimal(animalId);

    return response.data;
  }
);

export const animalsSlice = createSlice({
  name: 'animals',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimalsAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAnimalsAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.animals = payload.animals;
        state.pagination.totalPages = payload.pagination.pageCount;
      });

    builder
      .addCase(fetchAnimalsByQueryAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAnimalsByQueryAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        console.log(payload);
        state.animals = payload.animals;
      });

    builder
      .addCase(likeAnimalAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(likeAnimalAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.animals.splice(
          state.animals.findIndex((a) => a._id === payload._id),
          1,
          payload
        );
      });
  },
});

// Animals Selector
export const selectAnimals = (state: RootState) => state.animals;

export default animalsSlice.reducer;
