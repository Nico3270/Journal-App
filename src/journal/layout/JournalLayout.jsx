import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const JounrnalLayout = ({children}) => {
    return (
        <>
            <Box sx={{display: "flex"}}>
                <NavBar drawerWidth= {drawerWidth} />
                <SideBar drawerWidth={drawerWidth} />
                <Box component="main" sx={{flexGrow:1, p:1}}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </>
    )
}