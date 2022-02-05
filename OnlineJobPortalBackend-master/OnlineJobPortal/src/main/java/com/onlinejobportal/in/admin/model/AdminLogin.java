package com.onlinejobportal.in.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
public class AdminLogin {
	public AdminLogin() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long admin_id;
	
	@NotBlank(message = "Please enter Username")
	private String admin_username;

	private String admin_password;

	public AdminLogin(String admin_username, String admin_password) {

		this.admin_username = admin_username;
		this.admin_password = admin_password;
	}

	public AdminLogin(Long admin_id,
			@NotBlank(message = "Please enter Username") String admin_username,
			@NotBlank(message = "Please enter Username") String admin_password) {
		super();
		this.admin_id = admin_id;
		this.admin_username = admin_username;
		this.admin_password = admin_password;
	}


	public String getAdmin_username() {
		return admin_username;
	}

	public void setAdmin_username(String admin_username) {
		this.admin_username = admin_username;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public Long getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(Long admin_id) {
		this.admin_id = admin_id;
	}

	@Override
	public String toString() {
		return admin_username+" "+admin_password;
	}

}