import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URL = 'http://localhost:8080/api';

export const fetchMakes = createAsyncThunk('selectCar/makes', async() => {
  const res = await fetch(`${URL}/makes`);
  return res.json();
})

export const fetchModels = createAsyncThunk('selectCar/models', async(value) => {
  const res = await fetch(`${URL}/models?make=${value}`);
  return res.json();
})

export const fetchVehicle = createAsyncThunk('selectCar/vehicle', async({ make, model }) => {
  const res = await fetch(`${URL}/vehicles?make=${make}&model=${model}`);
  return res.json();
})

const initialState = {
  status: null,
  makes: [],
  models: [],
  vehicles: [],
  warning: false
}

const selectCarSlice = createSlice({
  name: 'selectCar',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMakes.pending, (state) => {
      state.status = 'pending';
    })
    builder.addCase(fetchMakes.fulfilled, (state, action) => {
      state.makes = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchMakes.rejected, (state) => {
      state.status = 'error';
      state.warning = false;
    })

    builder.addCase(fetchModels.pending, (state) => {
      state.status = 'pending';
    })
    builder.addCase(fetchModels.fulfilled, (state, action) => {
      state.models = action.payload;
      state.status = 'success';
      state.warning = action.payload.length === 0
    })
    builder.addCase(fetchModels.rejected, (state) => {
      state.status = 'error';
      state.warning = false;
    })

    builder.addCase(fetchVehicle.pending, (state) => {
      state.status = 'pending';
    })
    builder.addCase(fetchVehicle.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchVehicle.rejected, (state) => {
      state.status = 'error';
      state.warning = false;
    })
  }
});

export default selectCarSlice.reducer