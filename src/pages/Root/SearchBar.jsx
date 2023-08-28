
import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, FormControl, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Form, useNavigate } from "react-router-dom";

export default function SearchBar({}) {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const searchTerm = event.target.elements.search.value;
    event.preventDefault();
    navigate(`/address/${searchTerm}`);
    console.log("Search term:", searchTerm);
  };

  return (
    <Box component = 'form' sx={{minWidth: 0.6}} onSubmit={handleSubmit}>
      <TextField
      fullWidth
        id="search"
        label="Search Address"
        type="search"
        InputProps={{
          endAdornment:        <InputAdornment position="end">
          <IconButton  type="submit">
            <SearchIcon/>
          </IconButton>
            </InputAdornment>
        }}
        // variant=""
      >

      </TextField>
    </Box>
  );
};
