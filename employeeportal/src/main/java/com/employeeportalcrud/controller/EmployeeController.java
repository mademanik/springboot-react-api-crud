package com.employeeportalcrud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeportalcrud.entity.Employee;
import com.employeeportalcrud.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeRepository eRepo;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return eRepo.findAll();
	}

	@GetMapping("/employees/{id}")
	public Optional<Employee> findEmployeeById(@PathVariable("id") Long id) {
		return eRepo.findById(id);
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return eRepo.save(employee);
	}

	@PutMapping("/employees")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return eRepo.save(employee);
	}

	@DeleteMapping("/employees/{id}")
	public void removeEmployee(@PathVariable("id") Long id) {
		eRepo.deleteById(id);
	}

}
