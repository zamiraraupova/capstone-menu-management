import React, { Component } from 'react';
import FoodService from '../services/FoodService';


class UpdateFood extends Component {
    constructor(props)
    {
        super(props)

             this.state={
                 food_id: this.props.match.params.id,
                 food_name:'',
                 food_desc:'',
                 food_category:'',
                 food_price:0
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.descHandler = this.descHandler.bind(this);
        this.catHandler = this.catHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.updateFood = this.updateFood.bind(this);     
    }//constructor

     componentDidMount()
     {
        FoodService.getFoodById(this.state.food_id).then((res) =>{
          let food = res.data;
          //console.log(typeof res.data)
          this.setState({
                food_name:this.state.food_name,
                food_desc:this.state.food_desc,
                food_category:this.state.food_category,
                food_price:this.state.food_price
            });
        });
           
     }
     
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

   updateFood = (e) => {
        e.preventDefault();
        let food={
           food_id: this.state.food_id,
           food_name: this.state.food_name,
           food_desc: this.state.food_desc,
           food_category: this.state.food_category,
           food_price: Number(this.state.food_price)
        };
        
        FoodService.updateFood(food, this.state.food_id).then((res) => {
                this.props.history.push('/food');
        });
  
    }

    cancel = () => {
        this.props.history.push('/food');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Food</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Food ID: </label>
                                      <input placeholder={this.state.food_id} readOnly="true" name="id" className="form-control"
                                         value={this.state.food_id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Food Name: </label>
                                      <input placeholder={this.state.food_name} name="name" className="form-control"
                                         value={this.state.food_name} onChange={this.nameHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label> Food Description: </label>
                                      <input placeholder={this.state.food_desc} name="desc" className="form-control"
                                         value={this.state.food_desc} onChange={this.descHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Food Category: </label>
                                      <input placeholder={this.state.food_category} name="category" className="form-control"
                                         value={this.state.food_category} onChange={this.catHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Food Price: </label>
                                      <input type="number" placeholder={this.state.food_price} name="price" className="form-control"
                                         value={this.state.food_price} onChange={this.priceHandler} />
                                   </div>
                                    <button className="btn btn-success" id={this.props.food_id} onClick={this.updateFood}> Update </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default UpdateFood;