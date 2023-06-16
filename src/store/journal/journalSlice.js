

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null  //{id:"ABC123", title:"", body:"", date:123456, imageUrls:[arreglo de links de imagenes]}
}
export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote : (state, action) => {
            state.notes.push  (action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = "";
        },
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = "";


        },
        noteUpdated: (state, action) => {// payload: note
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id)
                {return action.payload}

                return note;
            });
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        }, 
        deleteNoteById: (state, action) => {

        } 
    },
})
// Action creators are generated for each case reducer function
export const { addNewEmptyNote,setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote, noteUpdated  } = journalSlice.actions