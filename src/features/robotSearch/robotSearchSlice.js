import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchField: "",
}

export const robotSearchSlice = createSlice({
    name: 'robotSearch',
    initialState,
    reducers: {
        searchRobots: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

export const { searchRobots } = robotSearchSlice.actions;

export default robotSearchSlice.reducer;