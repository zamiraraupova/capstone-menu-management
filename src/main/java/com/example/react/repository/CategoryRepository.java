package com.example.react.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.react.model.Category;

@Repository 
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	// List<Category> findByName(String cat_name);
}
