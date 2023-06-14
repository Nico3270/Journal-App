import { StarRateOutlined, StartOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
    return (
        <>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{
            minHeight: `calc(100vh - 110px)`,
            backgroundColor: "#83c5be", padding: 4, borderRadius: 3
        }}>
            <Grid item xs={12}>
                <StarRateOutlined sx={{fontSize:100, color:"white", textAlign:"center"}} />
                <Typography color="white" variant="h6">Selecciona o crea una nota</Typography>
            </Grid>
        </Grid>
        </>
    )
}