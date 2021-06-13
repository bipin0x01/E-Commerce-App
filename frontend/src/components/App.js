import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Container} from "react-bootstrap"
import "../index.css"
import Homescreen from "../Screens/Homescreen";
import {BrowserRouter as Router, Route} from "react-router-dom" 
import ProductScreen from "../Screens/ProductScreen";
import CartScreen from "../Screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/" component={Homescreen} exact/>
        <Route path="/product/:id" component={ProductScreen} exact/>
        <Route path="/cart/:id?" component={CartScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
