package com.example.react.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.react.model.Food;

@Repository 
public interface FoodRepository extends JpaRepository<Food, Integer> {
	// List<Food> findByName(String food_name);
}