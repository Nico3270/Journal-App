import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";


export const NoteView = () => {
    const dispatch = useDispatch();
    const {active, messageSaved, isSaving} = useSelector(state => state.journal);
    const {body, title, date, onInputChange, formState} = useForm(active);

    const dateString = useMemo(()=>{
        const newDate = new Date();
        return newDate.toUTCString();  
    },[date]);

    useEffect(() => {
        dispatch(setActiveNote(formState))
    },[formState]);

    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire("Nota actualizada", messageSaved, "success")
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        console.log("Subiendo archivos");

    };

    const fileInputRef = useRef();
    return (
        <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}
         className="animate__animated animate__fadeIn">
            <Grid item>
                <Typography fontSize={39} fontWeight={"light"}>{dateString}</Typography>
            </Grid>
            <Grid item>
                <input type="file" 
                multiple 
                ref={fileInputRef}
                onChange={onFileInputChange}
                style = {{display:"none"}}
                />
                <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>
                <Button color="primary" sx={{padding: 2}} disabled={isSaving} onClick={onSaveNote}>
                    <SaveOutlined sx={{fontSize:30, mr:1}} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField type="text" variant="filled" fullWidth 
                value={title} onChange={onInputChange} name="title"
                placeholder="Ingrese un titulo" label="Titulo" 
                sx={{border:"none", mb:1}}/>
            </Grid>
            <Grid container>
                <TextField type="text" variant="filled" fullWidth 
                value={body} onChange={onInputChange} name="body"
                multiline placeholder="¿Que sucedió en el día de hoy?"  minRows={5}/>
            </Grid>
            {/* //Imagenes de galería */}
            <ImageGallery />
        </Grid>
    )
}