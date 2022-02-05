package com.onlinejobportal.in.jobseeker.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.onlinejobportal.in.jobseeker.model.JobSeekerRegistration;
import com.onlinejobportal.in.jobseeker.service.JobSeekerRegistrationServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/jobseekerregistration/jobseeker")
public class JobSeekerRegistrationController {

	@Autowired
	private JobSeekerRegistrationServiceImpl jobseekerregistrationServiceImpl;

	@GetMapping(value = "/viewAll")
	public List<JobSeekerRegistration> findAll() {
		return jobseekerregistrationServiceImpl.getAllJobSeekerRegistrationDetails();
	}

	@PostMapping(value = "/addJobseeker")
	@ResponseStatus(HttpStatus.CREATED)
	public JobSeekerRegistration createJobSeekerRegistration(@RequestBody @Valid JobSeekerRegistration registration) {
		return jobseekerregistrationServiceImpl.save(registration);
	}

}