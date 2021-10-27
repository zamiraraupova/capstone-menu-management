import React, { Component } from 'react';
import FoodService from '../services/FoodService';
//import AddFood from './AddFood';
import update from '../images/update.png'
import add from '../images/add.png'
import trash from '../images/trash.png'


class ListFood extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                food:[] 
          }
          this.addFood=this.addFood.bind(this);
          this.updateFood=this.updateFood.bind(this);
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
        console.log("food is here")
        this.props.history.push('/addfood');
     }

     updateFood(food_id)
     {
         //console.log(food_id)
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
                    {/* <AddFood> Add </AddFood> */}
                    <button onClick={this.addFood}> <img id="icon" src={add} alt="home"></img> </button>
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
                                <th>Actions </th>
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
                                         <td>{food.food_category}</td>
                                         <td>{food.food_price}</td>
                                         <td>
                                            <button onClick={() =>this.updateFood(food.food_id)}>  <img id="icon" src={update} alt="home"></img> </button> 
                                            <button onClick={() =>this.deleteFood(food.food_id)}>  <img id="icon" src={trash} alt="home"></img> </button> 
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