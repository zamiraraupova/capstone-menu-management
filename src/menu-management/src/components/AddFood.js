import React, { Component } from 'react';
import FoodService from '../services/FoodService';
import save from '../images/save.png';
import cancel from '../images/cancel.png'
class AddFood extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           food_id: '',
           food_name:'',
           food_desc:'',
           food_category:'',
           food_price:''
           
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.descHandler = this.descHandler.bind(this);
        this.catHandler = this.catHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             food_id: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           food_name: event.target.value});
    }
    
    descHandler=(event) => {
        this.setState({
           food_desc: event.target.value});
    }

    catHandler=(event) => {
        this.setState({
           food_category: event.target.value});
    }

    priceHandler=(event) => {
        this.setState({
           food_price: event.target.value});
    }

    saveFood = (e) => {
        e.preventDefault();
        let food={
           food_id: this.state.food_id,
           food_name: this.state.food_name,
           food_desc: this.state.food_desc,
           food_category: this.state.food_category,
           food_price: this.state.food_price,
        };
        console.log(food);
        FoodService.createFood(food).then(res =>{
                this.props.history.push('/food');  
            }).catch(err=>{
                console.log("record not saved.");
            });
   
        
    }//closing save method

    cancel(){
        this.props.history.push('/food');
    }

    render() {
        return (
            <div className="page">
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Food</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label id="label"> Food ID: </label>
                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.food_id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label id="label">Food Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.food_name} onChange={this.nameHandler} />
                                   </div> 
                                   <div className="form-group">
                                   <label id="label">Food Description: </label>
                                   <input placeholder="Description" name="desc" className="form-control"
                                      value={this.state.food_desc} onChange={this.descHandler} />
                                  </div> 
                                     <div className="form-group">
                                     <label id="label">Food Category: </label>
                                     <input placeholder="Category" name="cat" className="form-control"
                                        value={this.state.food_category} onChange={this.catHandler} />
                                  </div> 
                                   <div className="form-group">
                                   <label id="label">Food Price: </label>
                                   <input placeholder="Price" name="price" className="form-control"
                                      value={this.state.food_price} onChange={this.priceHandler} />
                                </div>      
                                    <button onClick={this.saveFood}> Save <img id="icon" src={save} alt="save"></img></button>
                                    <button onClick={this.cancel.bind(this)}> Cancel <img id="icon" src={cancel} alt="cancel"></img></button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddFood;