import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItemApi, addToDoApi } from './Api';

export const getToDo = createAsyncThunk(
  'todos/get_ToDo',
  async () => {
    const res = await getItemApi();
    return res;
  }
)

export const addToDo = createAsyncThunk(
  'todos/add_ToDo',
  async (item) => {
    await addToDoApi(item);
    return item;
  }
)

const todo = createSlice({
  name: 'todos',
  initialState:[],
  reducers: {
    // addToDo : (state, action) => {
    //   // Không cần clone, ko return
    //   state.push(action.payload)
    //   console.log("payload", action.payload);
    // }
  },
  extraReducers : {
    [getToDo.pending] : (state, action) => {
      state = [];
    },
    [getToDo.fulfilled] : (state, action) => {
      state = action.payload;
      return state;
    },
    [addToDo.pending] : (state, action) => {
      state = [];
    },
    [addToDo.fulfilled] : (state, action) => {
      state.push(action.payload);
    }
  }
});

const { reducer, actions } = todo;
// export const { addToDo } = actions;
export default reducer;