import React, { Component } from 'react';
import FoodService from '../services/FoodService';
import update from '../images/update.png'
import add from '../images/add.png'
import trash from '../images/trash.png'

class ListFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food: []
        }
        //combined methods
        this.addFood = this.addFood.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }
    //responce data
    componentDidMount() {
        FoodService.getFood().then((res) => {
            this.setState({ food: res.data });
        });
    }

    addFood() {
        // console.log("food is here")
        this.props.history.push('/addfood');
    }

    updateFood(food_id) {
        //console.log(food_id)
        this.props.history.push(`/updatefood/${food_id}`);
    }

    deleteFood(food_id) {
        this.props.history.push(`/deletefood/${food_id}`);

    }

    render() {
        return (
            <div className="page">
                <h2 className="text-center">Menu List</h2>
                <div>
                    <button onClick={this.addFood}> <img id="icon" src={add} alt="add"></img> </button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered" id="table">
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
                                                <button onClick={() => this.updateFood(food.food_id)}>  <img id="icon" src={update} alt="update"></img> </button>
                                                <button onClick={() => this.deleteFood(food.food_id)}>  <img id="icon" src={trash} alt="trash"></img> </button>
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