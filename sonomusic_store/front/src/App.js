import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routs, Link } from 'react-router-dom';
import axios from 'axios';
import Search from './components/Search';
import ProductsList from './components/ProductsList';
import CartList from './components/CartList';
import ProductDetails from './components/ProductDetails';
import Update from './components/Update';
import Add from './components/Add';

const App = () => {
  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState([]);
  const [guitars, setGuitars] = useState([]);
  const [pianos, setPianos] = useState([]);
  const [drums, setDrums] = useState([]);
  

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/instru') 
      .then((resp) => {
        setGuitars(resp.data.filter((e) => e.category === 'guitars'));
        setPianos(resp.data.filter((e) => e.category === 'pianos'));
        setDrums(resp.data.filter((e) => e.category === 'drums'));
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  const cartStal = (obj) => {
    setCart([...cart,obj])
    }
    
    const removeStal =(index)=>{
      var newState = [...cart]
      newState.splice(index,1)
      setCart(newState)
      }
    
    const emptyCart = () => {
      setCart([])
    }
    
      const stal = (obj) => {
        setOneProduct(obj);
        setView("details");
      };
      const stalSearch = (terms) => {
        if (!terms) {
          setTrigger(!trigger);
        } else {
          setData(
            data.filter((e) =>
              e.name.toLowerCase().includes(terms.toLowerCase())
            )
          );
        }
      };
    
    const stalUpdate =(obj)=>{
    setView("update")
    setUpdate(obj)
    }

  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/" className="logo">
            TEK STORE
          </Link>
          
        </div>
        <Routs>
          <Route exact path="/">
            <Search stal={stalSearch} />
           
            <ProductsList update={stalUpdate} stal={stal} trigger={trigger} trig={setTrigger} products={data} cartStal={cartStal} />
          </Route>
          <Route path="/cart">
            <CartList remove={removeStal} cartData={cart} empty={emptyCart} />
          </Route>
          <Route path="/details/:productId">
            <ProductDetails product={oneProduct} />
          </Route>
          <Route path="/update/:productId">
            <Update obj={update} />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Routs>
      </div>
    </Router>
  )
};

export default App;



