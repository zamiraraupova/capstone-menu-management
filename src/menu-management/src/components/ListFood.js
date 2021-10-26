import React, { Component } from 'react';
import FoodService from '../services/FoodService';
import AddFood from './AddFood';

class ListFood extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                food:[] 
          }
          this.addFood=this.addFood.bind(this);
          this.editFood=this.editFood.bind(this);
          this.deleteFood=this.deleteFood.bind(this);
          //this.viewStudent=this.viewStudent.bind(this);
      }
    
     componentDidMount() {
        FoodService.getFood().then((res) => {
             this.setState({food:res.data});
         });
     }
     
     addFood()
     {
        this.props.history.push('/addfood');
     }

     editFood(food_id)
     {
        this.props.history.push(`/updatefood/${food_id}`);
        
     }

     deleteFood(food_id)
     {
        this.props.history.push(`/deletefood/${food_id}`);
        // FoodService.deleteFood(food_id).then(res => {
        //     this.setState({
        //          food: this.state.food.filter(food => food.food_id !== food_id)
        //     })
        // })
        
     }

    //  viewStudent(id)
    //  {
    //     this.props.history.push(`/view-student/${id}`);
        
    //  }
   
    render() {
       
        return (
            <div>
                <h2 className="text-center">Menu List</h2>
                <div> 
                    <AddFood> Add </AddFood>
                    <button className="btn btn-primary" onClick={this.addFood}> Add Food </button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Food ID </th>
                                <th> Food Name </th>
                                <th>Food  Description</th>
                                <th> Food Category </th>
                                <th>Food Price </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.food.map(
                                    food =>
                                     <tr key={food.food_id}>
                                         <td>{food.food_id}</td>
                                         <td>{food.food_name}</td>
                                         <td>{food.food_desc}</td>
                                         <td>{food.food_cat}</td>
                                         <td>{food.food_price}</td>
                                         <td>
                                            <button onClick={() =>this.editFood(food.food_id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteFood(food.food_id)} className="btn btn-danger">Delete</button> 
                                            {/* <button onClick={() =>this.viewFood(student.id)} className="btn btn-primary">View</button>  */}
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListFood;