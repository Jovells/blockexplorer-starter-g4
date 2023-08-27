import {  Typography } from "@mui/material";
import { Outlet } from 'react-router-dom';


function Root() {
 

  return (
    <>
    <Typography variant = 'h1'>Block Explorer</Typography>

<Outlet />

    </>
  );
}

export default Root;
