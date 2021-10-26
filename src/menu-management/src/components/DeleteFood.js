import React, { Component } from 'react';
import FoodService from '../services/FoodService';

class DeleteFood extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                food_id: this.props.match.params.id,
                food_name:'',
                food_desc:'',
                food_cat:'',
                food_price:''
             }
     
        
        this.deleteFood = this.deleteFood.bind(this);

    }//constructor

     componentDidMount()
     {
        FoodService.getFoodById(this.state.food_id).then((res) =>{
          let food = res.data;
          this.setState({food_name:this.state.food_name,
                  food_desc:this.state.food_desc
                });
        });
           
     }
     
    

    
  deleteStudent = (e) => {
        e.preventDefault();
        let food={
           food_id: this.state.food_id,
           food_name: this.state.food_name,
           food_desc: this.state.food_desc,
           food_cat: this.state.food_cat,
           food_price: this.state.food_price
        };

        console.log(food);
        FoodService.deleteFood(this.state.food_id).then(res => {
            
            this.props.history.push('/food');
        })
      
        
    }

    cancel(){
        this.props.history.push('/food');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Food</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Food ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.food_id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Food Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.food_name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Food Descrition: </label>
                                      <input placeholder="Grade" readOnly="true" name="desc" className="form-control"
                                         value={this.state.food_desc} onChange={this.descHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Food Category: </label>
                                      <input placeholder="Name" name="cat" className="form-control"
                                         value={this.state.food_cat} onChange={this.catHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>Food Price: </label>
                                      <input placeholder="Name" name="price" className="form-control"
                                         value={this.state.food_price} onChange={this.priceHandler} />
                                   </div>  
                                    <button className="btn btn-success" onClick={this.deleteFood}> Delete </button>
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

export default DeleteFood;