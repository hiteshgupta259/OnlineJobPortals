package com.onlinejobportal.in.jobprovider.model;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import javax.validation.constraints.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class JobProvider {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jp_id;

	@NotNull
	@Size(min = 3, message = "User Name length should be greater than 2")
	@Pattern(regexp = "[_a-zA-Z]+[0-9]*", message = "Please use alphabet or alphanumeric combination")
	private String jp_username;

	@NotNull
	@Size(min = 5, message = "Password Length Should be more then 5")
	@Pattern(regexp = "[A-Za-z0-9]+[!@#$%^&*]+[a-zA-Z0-9]*", message = "Password Should Contain UpperCase or LowerCase Alphabet, special character and digits")
	private String jp_pwd;

	@NotNull
	@Pattern(regexp = "[A-Za-z]+[&]*[a-zA-z]*", message = "Please Enter Valid Company Name")
	private String company_name;

	@NotNull
	@Size(max = 20)
	@Pattern(regexp = "[A-Za-z]+[ ]?[A-za-z]*[ ]?[A-za-z]*", message = "Please Enter Valid Full-Name")
	private String full_name;

	@NotNull
	@Pattern(regexp = "[A-Za-z .]+", message = "Please Enter Valid Designation")
	private String designation;

	@NotNull
	@Size(max = 10)
	@Pattern(regexp = "[A-Za-z]+", message = "Please Enter Valid Department")
	private String department;

	@NotNull
	@Pattern(regexp = "[A-Za-z]+[0-9]*@[a-zA-Z]+.[a-zA-A]+", message = "Please Enter Valid Email-ID")
	private String email;

	@NotNull
	@Size(min = 10, max = 10, message = "Please Enter Valid Phone Number of length 10 digits")
	@Pattern(regexp = "[0-9]+")
	private String phone_no;

	@NotNull
	@Size(min = 3, message = "Location length should be greater than 2")
	@Pattern(regexp = "[A-Za-z]+", message = "Please Enter Valid Location")
	private String location;

	public JobProvider() {
	}

	public JobProvider(Integer jp_id, String jp_username, String jp_pwd, String company_name, String full_name,
			String designation, String department, String email, String phone_no, String location) {
		super();
		this.jp_id = jp_id;
		this.jp_username = jp_username;
		this.jp_pwd = jp_pwd;
		this.company_name = company_name;
		this.full_name = full_name;
		this.designation = designation;
		this.department = department;
		this.email = email;
		this.phone_no = phone_no;
		this.location = location;
	}

	public JobProvider(String jp_username, String jp_pwd, String company_name, String full_name, String designation,
			String department, String email, String phone_no, String location) {
		super();
		this.jp_username = jp_username;
		this.jp_pwd = jp_pwd;
		this.company_name = company_name;
		this.full_name = full_name;
		this.designation = designation;
		this.department = department;
		this.email = email;
		this.phone_no = phone_no;
		this.location = location;
	}

	public JobProvider(String jp_username, String jp_pwd) {
		super();
		this.jp_username = jp_username;
		this.jp_pwd = jp_pwd;
	}

	public Integer getJp_id() {
		return jp_id;
	}

	public void setJp_id(Integer jp_id) {
		this.jp_id = jp_id;
	}

	public String getJp_username() {
		return jp_username;
	}

	public void setJp_username(String jp_username) {
		this.jp_username = jp_username;
	}

	public String getJp_pwd() {
		return jp_pwd;
	}

	public void setJp_pwd(String jp_pwd) {
		this.jp_pwd = jp_pwd;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}