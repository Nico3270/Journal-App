import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"


export const SideBarItem = ({nota}) => {
    const dispatch = useDispatch();
    const onclickNote = () => {
        dispatch(setActiveNote (nota));
    }

    const newTitle = useMemo(() =>{
        return nota.title.length > 17
        ? nota.title.substring(0,17) + "...."
        : nota.title
    })
    return (
        <ListItem disablePadding >
            <ListItemButton onClick={onclickNote}>
                <ListItemIcon><TurnedInNot /></ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={nota.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}





