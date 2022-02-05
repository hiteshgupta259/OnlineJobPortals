package com.onlinejobportal.in.jobdetails.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinejobportal.in.jobdetails.model.JobDetails;
import com.onlinejobportal.in.jobdetails.service.IJobDetailsService;
import com.onlinejobportal.in.jobseeker.model.Apply;
import com.onlinejobportal.in.jobseeker.model.JobSeekerRegistration;
import com.onlinejobportal.in.jobseeker.repository.ApplyRepository;

@RestController
@Validated
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/jobDetails")
public class JobDetailsController {

	@Autowired
	private IJobDetailsService jobDetailsService;

	@Autowired
	private ApplyRepository applyRepository;

	// Add new job
	@PostMapping(value = "/addJob")
	public ResponseEntity<String> postJobDetails(@Valid @RequestBody JobDetails jobDetails) {
		jobDetailsService.postJobDetails(jobDetails);
		Long jobId = jobDetails.getJobId();
		return new ResponseEntity<String>("Job With id " + jobId + " added Successfully ", HttpStatus.CREATED);
	}

	// Delete job by id
	@DeleteMapping(value = "/deleteJob/{jobId}")
	public ResponseEntity<List<JobDetails>> deleteJobById(@PathVariable @Min(1) Long jobId) {
		List<JobDetails> jobDetails = jobDetailsService.deleteJobByJobId(jobId);
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	// Update Last Date
	@PatchMapping(value = "/updateJobLastDateById/{jobId}")
	public ResponseEntity<String> updateJobDetails(@RequestBody JobDetails jobDetails,
			@PathVariable @Min(1) Long jobId) {
		String jobLastDate = jobDetails.getJobLastDate();
		jobDetailsService.updateJobDetailsById(jobId, jobLastDate);
		return new ResponseEntity<String>("Job with id " + jobId + " updated successfully.", HttpStatus.OK);
	}

	// List all jobs
	@GetMapping(value = "/allJobs")
	public ResponseEntity<List<JobDetails>> listAllJobs() {
		List<JobDetails> jobDetails = jobDetailsService.listAllJobs();
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	// List jobs based on skills
	@GetMapping(value = "/allJobs/bySkills")
	public ResponseEntity<List<JobDetails>> listJobsBySkills(@RequestBody Map<String, String> jobSkills) {
		String jobSkill = jobSkills.get("jobSkills");
		List<JobDetails> jobDetails = jobDetailsService.listJobsBySkills(jobSkill);
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	// List jobs based on salary
	@GetMapping(value = "/allJobs/bySalary")
	public ResponseEntity<List<JobDetails>> listJobsBySalary(@RequestBody Map<String, Double> jobSalary) {
		Double salary = jobSalary.get("jobSalary");
		List<JobDetails> jobDetails = jobDetailsService.listJobsBySalary(salary);
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	// List jobs by experience
	@GetMapping(value = "/allJobs/byExperience")
	public ResponseEntity<List<JobDetails>> listJobsByExperience(@RequestBody Map<String, String> jobExperience) {
		String jobExp = jobExperience.get("jobExperience");
		List<JobDetails> jobDetails = jobDetailsService.listJobsByExperience(jobExp);
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	// List jobs by designation
	@GetMapping(value = "/allJobs/byDesignation")
	public ResponseEntity<List<JobDetails>> listJobsByDesignation(@RequestBody Map<String, String> jobDesignation) {
		String jobDesig = jobDesignation.get("jobDesignation");
		List<JobDetails> jobDetails = jobDetailsService.listJobsByDesignation(jobDesig);
		return new ResponseEntity<List<JobDetails>>(jobDetails, HttpStatus.OK);
	}

	@GetMapping(value = "/viewJobById/{jobId}")
	public ResponseEntity<JobDetails> viewJobDetailsById(@PathVariable @Min(1) Long jobId) {
		JobDetails jobDetails = jobDetailsService.viewJobById(jobId);
		return new ResponseEntity<JobDetails>(jobDetails, HttpStatus.OK);
	}

	@PostMapping(value = "/apply")
	public Apply applyForJob(@RequestBody Apply apply) {
		JobDetails jobs = new JobDetails();
		jobs.setJobId(apply.getId().getJobId());
		JobSeekerRegistration jobSeeker = new JobSeekerRegistration();
		jobSeeker.setSrid(apply.getId().getJobseekerId());
		Apply apply1 = new Apply();
		apply1.setCollegeName(apply.getCollegeName());
		apply1.setUniversityName(apply.getUniversityName());
		apply1.setUGPercentage(apply.getUGPercentage());
		apply1.setStatus("applied");
		apply1.setJobs(jobs);
		apply1.setJobseeker(jobSeeker);
		apply1.setId(apply.getId());
		System.out.println(apply1.getUGPercentage());
		return applyRepository.save(apply1);
	}

}