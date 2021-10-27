import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css"
import ListFood from './components/ListFood'
import AddFood from './components/AddFood.js';
import UpdateFood from './components/UpdateFood.js';
import DeleteFood from './components/DeleteFood.js';
//import ViewStudent from './components/ViewStudent';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route exact path="/" component={ListFood}></Route>
                  <Route path="/food" component={ListFood}></Route>
                  <Route path="/addfood" component={AddFood}></Route>
                  <Route path="/updatefood/:id" component={UpdateFood}></Route>
                  <Route path="/deletefood/:id" component={DeleteFood}></Route> 
                  
                  {/* <Route path="/view-student/:id" component={ViewStudent}></Route>  */}
                  
              </Switch>
            </div>
            <Footer />
            
         </Router> 
        </div>
  );
}

export default App;
