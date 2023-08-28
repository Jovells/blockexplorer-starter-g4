import {  Backdrop, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


function Root() {
 
  const location = useLocation()
  const navigation = useNavigation()

  return (

    <>
    {/* {navigation.state ==='loading'  && (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open >
        <CircularProgress color="inherit" />
      </Backdrop>
    )}     */}
    <Grid2   mx={-3} container rowGap={2} width={0.8} m='0 auto'>
    <Stack component={Paper}  bgcolor={''}  p={3}  width={1} direction='row' mr={3} mb={3} alignItems='center' justifyContent = 'space-between'>

    <Typography mr={2}  fontWeight={'bold'} variant = 'h4'>Block Explorer</Typography>
    <SearchBar/>
    </Stack>
    <Outlet  />

    </Grid2>
    </>
  );
}

export default Root;
