import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTodos = createAsyncThunk("fetchTodos", async ()=> {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/ten');
    return await response.json()
    
})
const initialState = {
    todos: [],
    isLoading: false,
    isError: false
}

export const todoSlice = createSlice({
    name : "Todos",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchTodos.fulfilled, (state,action)=> {
        state.isLoading = false
        state.isError = false
        state.todos = action.payload
        // console.log(action.payload)
        console.log(state.todos);
      });
      builder.addCase(fetchTodos.pending, (state,action)=> {
        state.isLoading = true
        state.isError = false
      })
      builder.addCase(fetchTodos.rejected, (state,action)=> {
        state.isError = true
        console.log("Error", action.payload);
      })
    }
})
export default todoSlice.reducer
