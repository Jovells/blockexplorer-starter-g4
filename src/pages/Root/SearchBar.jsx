
import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({}) {

  const handleSubmit = (event) => {
    const searchTerm = event.target.elements.search.value;
    event.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <FormControl sx={{minWidth: 0.6}} onSubmit={handleSubmit}>
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
    </FormControl>
  );
};
