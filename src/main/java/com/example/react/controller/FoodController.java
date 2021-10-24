package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.exception.ResourceNotFoundException;
import com.example.react.model.Food;
import com.example.react.repository.FoodRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")

public class FoodController {
	
	@Autowired
	
	private FoodRepository foodRepo;
	
	//get all categories
	
	@GetMapping("/allfood")
	public List<Food> getAllFood(){
		return foodRepo.findAll();
		
	}
	
	@PostMapping("/addfood")
	public Food newFood(@RequestBody Food food) {
		return foodRepo.save(food);
	}
	
	@GetMapping("/food/{id}")
	public ResponseEntity<Food> getFoodById(@PathVariable int food_id){
		Food food = foodRepo.findById(food_id).orElseThrow(() -> new ResourceNotFoundException("Food not found"));
		return ResponseEntity.ok(food);
	}
	
//	@GetMapping("/food/{name}")
//	public List<Food> getFoodByName(@PathVariable String food_name){
//		//return foodRepo.findByName(food_name);
//		
//			List <Food> food=foodRepo.findByName(food_name);
//			if(food.isEmpty()){
//				System.out.println(new ResourceNotFoundException("Category with the name "+ food_name +" not found"));
//				}
//				
//			return foodRepo.findByName(food_name);
//	}
	
	
//@PutMapping("/food/{id}")
//public ResponseEntity<Food> updateFood(@PathVariable int food_id, @RequestBody Food food)
//{
//	Food food = foodRepo.findById(food_id).orElseThrow(() ->  new ResourceNotFoundException("Food not found"));
//    food.setFood_name(food.getFood_name());
//    Food updatedFood=foodRepo.save(food);
//    return ResponseEntity.ok(updatedFood);
//}

@DeleteMapping("/food/{id}")
public String deleteFood(@PathVariable int food_id)
{
	foodRepo.findById(food_id).orElseThrow(() ->  new ResourceNotFoundException("Food not found"));
    foodRepo.deleteById(food_id);
    return "The food with id: "+ food_id +" is removed from the database.";
}
		

}

