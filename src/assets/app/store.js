import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../../features/studentSlice";
import todoReducer from '../../features/todoSlice';
import { combineReducers } from 'redux';

export const store = configureStore({
    reducer: combineReducers({
        todo: todoReducer,
        // student: studentReducer
    })
});
