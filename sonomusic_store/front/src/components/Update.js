import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Update = () => {
  const { productId } = useParams();
  const history = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/instru/${productId}`)
      .then((response) => {
        const { name, description, price, imageUrl, category } = response.data;
        setProductData({ name, description, price, imageUrl, category });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/instru/${productId}`, productData)
      .then((result) => {
        console.log(result);
        alert("Updated successfully");
        history.push("/"); 
      })
      .catch((err) => {
        console.error("Error updating product:", err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
          value={productData.name}
          onChange={handleInputChange}
        />
     
      </div>
      <button onClick={handleUpdate}>Update</button>
    </Box>
  );
}

export default Update;
