import React, { Component } from 'react';
import FoodService from '../services/FoodService';
import trash from '../images/trash.png';
import cancel from '../images/cancel.png';

class DeleteFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food_id: this.props.match.params.id,
            food_name: '',
            food_desc: '',
            food_category: '',
            food_price: ''
        }
        //methods
        this.deleteFood = this.deleteFood.bind(this);
    }
    //
    componentDidMount() {
        FoodService.getFoodById(this.state.food_id).then((res) => {
            let food = res.data;
            console.log(food)
            this.setState({
                food_name: this.state.food_name,
                food_desc: this.state.food_desc,
                food_category: this.state.food_category,
                food_price: this.state.food_price
            });
        });

    }

    deleteFood = (e) => {
        e.preventDefault();
        let food = {
            food_id: this.state.food_id,
            food_name: this.state.food_name,
            food_desc: this.state.food_desc,
            food_category: this.state.food_category,
            food_price: this.state.food_price
        };
        console.log(food);
        //when entree is deleted, navigates to menu list page
        FoodService.deleteFood(this.state.food_id).then(res => {
            this.props.history.push('/food');
        })
    }
    //closing and save method
    cancel() {
        this.props.history.push('/food');
    }

    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id="table">
                            <h3 className="text-center">Delete Food</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label id="label">Food ID: </label>
                                        <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                            value={this.state.food_id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Food Name: </label>
                                        <input placeholder="Name" readOnly="true" name="name" className="form-control"
                                            value={this.state.food_name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Food Descrition: </label>
                                        <input placeholder="Descrition" readOnly="true" name="desc" className="form-control"
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
                                    <button onClick={this.deleteFood}> Delete <img id="icon" src={trash} alt="trash"></img> </button>
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

export default DeleteFood;