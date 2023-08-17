import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routs, Link } from "react-router-dom";
import axios from "axios";
import Search from "./components/Search";
import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";
import ProductDetails from "./components/ProductDetails";
import Update from "./components/Update";
import Add from "./components/Add";

const App = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [view, setView] = useState("productList");
  const [oneProduct, setOneProduct] = useState({});
  const [menuView, setMenuView] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/instru") 
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);

  const cartStal = (obj) => {
    setCart([...cart, obj]);
  };

  

  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/" className="logo" onClick={() => setTrigger(!trigger)}>
            MUSICAL INSTRUMENT STORE
          </Link>
          {view === "productList" && <Search stal={stalSearch} />}
          {view === "productList" && (
            <Link to="/" className="items">
              CATEGORIES
            </Link>
          )}
          <Link to="/add" className="items">
            ADD
          </Link>
          <Link to="/cart" className="items">
            🛒 CART
          </Link>
        </div>

        {menuView && (
          <div className="menu">
            <Link
              to="/"
              className="menu-item"
              onClick={() => setData(computers)}
            >
              Computers
            </Link>
            <Link to="/" className="menu-item" onClick={() => setData(phones)}>
              Phones
            </Link>
            <Link
              to="/"
              className="menu-item"
              onClick={() => setData(electronics)}
            >
              Electronics
            </Link>
          </div>
        )}

        <Routs>
          <Route path="/" exact>
            <ProductsList
              update={stalUpdate}
              stal={stal}
              trigger={trigger}
              trig={setTrigger}
              products={data}
              cartStal={cartStal}
            />
          </Route>
          <Route path="/cart">
            <CartList remove={removeStal} cartData={cart} empty={emptyCart} />
          </Route>
          <Route path="/details">
            <ProductDetails product={oneProduct} />
          </Route>
          <Route path="/update">
            <Update obj={update} />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Routs>
      </div>
    </Router>
  );
};

export default App;
