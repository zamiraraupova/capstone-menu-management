import axios from 'axios';

const FOOD_API_BASE_URL= "http://localhost:8080/api";
class FoodService{

    getFood(){
       return axios.get(FOOD_API_BASE_URL + "/allfood" );
    }

    createFood(food){
        return axios.post(FOOD_API_BASE_URL + "/food", food);
    }

    getFoodById(food_id){
        return axios.get(FOOD_API_BASE_URL + "/allfood/" + food_id);
    }

    updateFood(food, food_id){
        console.log(food_id)
        return axios.put(FOOD_API_BASE_URL + "/allfood/" + food_id, food);
    }

    deleteFood(food_id){
        return axios.delete(FOOD_API_BASE_URL + "/food/" + food_id);
    }

 }

export default new FoodService();