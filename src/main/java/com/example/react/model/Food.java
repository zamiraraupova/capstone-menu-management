package com.example.react.model;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="food")
public class Food {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int food_id;
	private String food_name;
	private String food_desc;
	private int food_price;
	@ManyToOne // relationship
	@JoinColumn(name="cat_id")
//	@Column(name="cat_id")
	private Category category;
	
	public Food() {
		
	}

	public Food(int food_id, String food_name, String food_desc, int food_price, Category category) {
		super();
		this.food_id = food_id;
		this.food_name = food_name;
		this.food_desc = food_desc;
		this.food_price = food_price;
		this.category = category;
	}

	public int getFood_id() {
		return food_id;
	}

	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}

	public String getFood_name() {
		return food_name;
	}

	public void setFood_name(String food_name) {
		this.food_name = food_name;
	}

	public String getFood_desc() {
		return food_desc;
	}

	public void setFood_desc(String food_desc) {
		this.food_desc = food_desc;
	}

	public int getFood_price() {
		return food_price;
	}

	public void setFood_price(int food_price) {
		this.food_price = food_price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	
	
}
