import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import ListFood from './components/ListFood'
import AddFood from './components/AddFood.js';
import UpdateFood from './components/UpdateFood.js';
import DeleteFood from './components/DeleteFood.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/home"> <Home /> </Route>
            <Route exact path="/login"> <Login /> </Route>
            <Route exact path="/" component={ListFood}></Route>
            <Route path="/food" component={ListFood}></Route>
            <Route path="/addfood" component={AddFood}></Route>
            <Route path="/updatefood/:id" component={UpdateFood}></Route>
            <Route path="/deletefood/:id" component={DeleteFood}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
