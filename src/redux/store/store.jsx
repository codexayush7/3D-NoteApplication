import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../slice/notes/notes.jsx";

export const store = configureStore({
    reducer: {notes: notesReducer},
});

export default store;