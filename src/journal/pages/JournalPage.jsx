import { IconButton, Typography } from "@mui/material"
import { JounrnalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { savingNewNote } from "../../store/journal/journalSlice";

const drawerWidth = 240;


export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <>
            <JounrnalLayout className="animate__animated animate__fadeIn">

                {(!!active) ? <NoteView />
                    : <NothingSelectedView />
                }
                <IconButton size="large" disabled={isSaving || active} onClick={onClickNewNote}
                    sx={{
                        color: "white", backgroundColor: "error.main", ":hover": {
                            backgroundColor: "error.main",
                            opacity: 0.9
                        },
                        position: "fixed", right: 50, bottom: 50
                    }}>
                    <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>
            </JounrnalLayout>
        </>
    )
}