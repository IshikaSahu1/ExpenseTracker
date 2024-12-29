package in.co.expenseTracker;

import java.time.LocalDate;

import javax.validation.constraints.NotEmpty;

public class ExpenseForm {
	
	
	
	@NotEmpty(message = "please enter category")
    private String category;
	
	@NotEmpty(message = "please enter desceiption")
    private String description;
	
	@NotEmpty(message = "please enter amount")
    private double amount;
	
	@NotEmpty(message = "please enter date")
    private LocalDate date;
    
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public ExpenseDTO getDto() {

		ExpenseDTO dto = new ExpenseDTO();
		dto.setCategory(category);;
		dto.setDescription(description);;
		dto.setAmount(amount);;
		dto.setDate(date);;
			
		return dto;
    
	}
}
