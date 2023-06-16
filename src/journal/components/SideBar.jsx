import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBar = ({ drawerWidth }) => {
    const dispatch = useDispatch();
    const {displayName} = useSelector(state => state.auth);
    const {notes} = useSelector(state => state.journal);
    
    return (
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer variant="permanent" open sx={{display:{xs:"block"}, "& .MuiDrawer-paper":{boxSizing: "border-box", width: drawerWidth}}}>
                <Toolbar sx={{backgroundColor:"#e29578", color:"#f1faee"}}>
                    <Typography variant="h6" noWrap component="div">{displayName}</Typography>
                </Toolbar> 
                    <Divider />
                    <List>
                        {
                            notes.map((nota) => {
                                return(
                                    <SideBarItem key={nota.id} nota={nota}/>
                                )
                            })
                        }
                    </List>
            </Drawer>

        </Box>
    )
}