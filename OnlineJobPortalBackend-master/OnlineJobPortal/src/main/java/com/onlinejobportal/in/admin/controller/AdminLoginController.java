package com.onlinejobportal.in.admin.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.onlinejobportal.in.admin.model.AdminLogin;
import com.onlinejobportal.in.admin.service.AdminLoginServiceImpl;

@CrossOrigin
@RestController
@RequestMapping(value = "/adminDetails")
public class AdminLoginController {
	@Autowired
	private AdminLoginServiceImpl adminLoginServiceImpl;

	@GetMapping(value = "/getDetails")
	public ResponseEntity<List<AdminLogin>> getAllDetails() {
		List<AdminLogin> details = adminLoginServiceImpl.getAllDetails();
		if (!details.isEmpty()) {
			return new ResponseEntity<>(details, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@PostMapping(value = "/adminlogin")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<String> createAdminLogin(@RequestBody @Valid AdminLogin login) {
		return new ResponseEntity<String>("Login Successfull", HttpStatus.OK);
	}

//adminCpass/{admin_id}
	@PatchMapping(value = "/adminCpass/{admin_id}")
	public AdminLogin update(@RequestBody Map<String, String> updatePassword, @PathVariable Long admin_id) {

		return adminLoginServiceImpl.updateAdminPassword(updatePassword, admin_id);

	}

}