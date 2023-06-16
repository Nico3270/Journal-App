import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, noteUpdated, savingNewNote, setActiveNote, setNotes, setSaving } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const {uid} = getState().auth;
        //ui
        const newNote = {
            title: "", 
            body: "",
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`));

        const setDocResp = await setDoc(newDoc, newNote);
        console.log({newDoc, setDocResp, uid});

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote (newNote));
        dispatch(setActiveNote(newNote));
    }
};

//Función para cargar las notas desde la base de datos
//Debe ser una función asincrona

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        if (!uid) throw new Error ("El UID del usuario no existe")
        const respuesta = await loadNotes(uid);
        dispatch(setNotes(respuesta));
    }
};

export const startSaveNote = () => {
    return async ( dispatch, getState) => {
        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active} = getState().journal;
        const noteToFirestore = { ...active };
        delete noteToFirestore.id;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);
        await setDoc(docRef, noteToFirestore, {merge:true});
        dispatch(noteUpdated(active));
    }
};

