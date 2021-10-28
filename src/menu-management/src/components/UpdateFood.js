import React, { Component } from 'react';
import FoodService from '../services/FoodService';
import update from '../images/update.png';
import cancel from '../images/cancel.png';

class UpdateFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food_id: this.props.match.params.id,
            food_name: '',
            food_desc: '',
            food_category: '',
            food_price: 0
        }
        //methods
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.descHandler = this.descHandler.bind(this);
        this.catHandler = this.catHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.updateFood = this.updateFood.bind(this);
    }

    componentDidMount() {
        FoodService.getFoodById(this.state.food_id).then((res) => {
            let food = res.data;
            console.log(res.data)
            this.setState({
                food_name: food.food_name,
                food_desc: food.food_desc,
                food_category: food.food_category,
                food_price: food.food_price
            });
        });

    }

    idHandler = (event) => {
        this.setState({
            food_id: event.target.value
        });
    }

    nameHandler = (event) => {
        this.setState({
            food_name: event.target.value
        });
    }
    descHandler = (event) => {
        this.setState({
            food_desc: event.target.value
        });
    }

    catHandler = (event) => {
        this.setState({
            food_category: event.target.value
        });
    }

    priceHandler = (event) => {
        this.setState({
            food_price: event.target.value
        });
    }

    updateFood = (e) => {
        e.preventDefault();
        let food = {
            food_id: this.state.food_id,
            food_name: this.state.food_name,
            food_desc: this.state.food_desc,
            food_category: this.state.food_category,
            food_price: Number(this.state.food_price)
        };
        //when entree is updated, navigates to menu list page
        FoodService.updateFood(food, this.state.food_id).then((res) => {
            this.props.history.push('/food');
        });
    }
    //closing and save method
    cancel = () => {
        this.props.history.push('/food');
    }

    render() {
        return (
            <div className="page">
                <div className="container" >
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" id="table">
                            <h3 className="text-center">Update Food</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label id="label">Food ID: </label>
                                        <input placeholder={this.state.food_id} readOnly="true" name="id" className="form-control"
                                            value={this.state.food_id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Food Name: </label>
                                        <input placeholder={this.state.food_name} name="name" className="form-control"
                                            value={this.state.food_name} onChange={this.nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label id="label"> Food Description: </label>
                                        <input placeholder={this.state.food_desc} name="desc" className="form-control"
                                            value={this.state.food_desc} onChange={this.descHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Food Category: </label>
                                        {/* add value & onChange to <select> in order to have values saved to database: */}
                                        <select value={this.state.food_category} onChange={this.catHandler} id="business" name="business">
                                            <option placeholder="Type" name="type" className="form-control" value="Appetizers">Appetizers</option>
                                            <option placeholder="Type" name="type" className="form-control" value="Salads">Salads</option>
                                            <option placeholder="Type" name="type" className="form-control" value="Soups">Soups</option>
                                            <option placeholder="Type" name="type" className="form-control" value="Entrees">Entrees</option>
                                            <option placeholder="Type" name="type" className="form-control" value="Desserts">Desserts</option>
                                            <option placeholder="Type" name="type" className="form-control" value="Drinks">Drinks</option>
                                        </select>
                                        {/* <input placeholder={this.state.food_category} name="category" className="form-control"
                                         value={this.state.food_category} onChange={this.catHandler} /> */}
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Food Price: </label>
                                        <input type="number" placeholder={this.state.food_price} name="price" className="form-control"
                                            value={this.state.food_price} onChange={this.priceHandler} />
                                    </div>
                                    <button id={this.props.food_id} onClick={this.updateFood}> Update <img id="icon" src={update} alt="update"></img></button>
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

export default UpdateFood;