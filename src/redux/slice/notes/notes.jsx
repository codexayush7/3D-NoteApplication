import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload);
        },
        updateNote: (state, action) => {
            const index = state.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
