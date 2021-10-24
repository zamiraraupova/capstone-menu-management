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
import com.example.react.model.Category;
import com.example.react.repository.CategoryRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")

public class CategoryController {
	
	@Autowired
	
	private CategoryRepository catRepo;
	
	//get all categories
	
	@GetMapping("/allcategories")
	public List<Category> getAllCategory(){
		return catRepo.findAll();
		
	}
	
	@PostMapping("/addcategory")
	public Category newCategory(@RequestBody Category cat) {
		return catRepo.save(cat);
	}
	
	@GetMapping("/category/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable int cat_id){
		Category cat = catRepo.findById(cat_id).orElseThrow(() -> new ResourceNotFoundException("Category not found"));
		return ResponseEntity.ok(cat);
	}
	
//	@GetMapping("/category/{name}")
//	public List<Category> getCategoryByName(@PathVariable String cat_name){
//		//return categoryRepo.findByName(cat_name);
//		
//			List <Category> categories=catRepo.findByName(cat_name);
//			if(categories.isEmpty()){
//				System.out.println(new ResourceNotFoundException("Category with the name "+ cat_name +" not found"));
//				}
//				
//			return catRepo.findByName(cat_name);
//	}
	
	
@PutMapping("/category/{id}")
public ResponseEntity<Category> updateCategory(@PathVariable int cat_id, @RequestBody Category category)
{
	Category cat= catRepo.findById(cat_id).orElseThrow(() ->  new ResourceNotFoundException("Category not found"));
    cat.setCat_name(category.getCat_name());
    Category updatedCategory=catRepo.save(cat);
    return ResponseEntity.ok(updatedCategory);
}

@DeleteMapping("/category/{id}")
public String deleteCategory(@PathVariable int cat_id)
{
	catRepo.findById(cat_id).orElseThrow(() ->  new ResourceNotFoundException("Category not found"));
    catRepo.deleteById(cat_id);
    return "The category with id: "+ cat_id +" is removed from the database.";
}
		

}
