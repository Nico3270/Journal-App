import { CircularProgress, Grid, Typography } from "@mui/material"


export const CheckingAuth = () => {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{
            minHeight: "100vh",
            backgroundColor: "#262254", padding: 4
        }}>

            <Grid container className='box-shadow' direction="row" justifyContent="center">
                <CircularProgress color="warning"></CircularProgress>
            </Grid>
        </Grid>
    )
}