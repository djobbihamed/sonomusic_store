import React, { useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Add(props) {
  const [added, setAdded] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setAdded({ ...added, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    axios.post("http://localhost:5000/api/instru", added)
      .then((result) => {
        console.log(result);
        alert("Added successfully");
      })
      .catch(err => console.log(err));
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          value={added.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Description"
          name="description"
          value={added.description}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Category"
          name="category"
          value={added.category}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Price"
          name="price"
          value={added.price}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Image URL"
          name="imageUrl"
          value={added.imageUrl}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </Box>
  );
}
