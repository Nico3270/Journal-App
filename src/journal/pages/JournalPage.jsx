import { IconButton, Typography } from "@mui/material"
import { JounrnalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { AddOutlined } from "@mui/icons-material";

const drawerWidth = 240;


export const JournalPage = () => {
    return (
        <>
            <JounrnalLayout>
                {/* <Typography>
                    Laborum id nisi eiusmod sit velit ea exercitation incididunt fugiat eu do culpa magna nulla. Officia aliqua tempor aliqua dolor deserunt incididunt est pariatur. Cillum nisi elit nostrud tempor veniam anim. Exercitation labore labore ea tempor enim elit dolore. Laboris velit adipisicing commodo laborum ipsum ex magna incididunt labore. Consectetur officia exercitation occaecat ad aliquip aliquip nisi mollit cillum ullamco consequat. Elit do do veniam irure elit voluptate elit eiusmod dolore nisi ea adipisicing id exercitation.
                </Typography> */}
                <NothingSelectedView />
                {/* <NoteView /> */}
                <IconButton size="large" sx={{color:"white", backgroundColor:"error.main", ":hover":{backgroundColor:"error.main", opacity: 0.9},
                position:"fixed", right:50, bottom:50 }}>
                <AddOutlined  sx={{fontSize:30}}/>

                </IconButton>
            </JounrnalLayout>
        </>
    )
}