package com.onlinejobportal.in.guest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinejobportal.in.guest.exceptions.JobsNotFoundException;
import com.onlinejobportal.in.guest.model.Jobs;
import com.onlinejobportal.in.guest.service.JobService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/jobs")
public class JobController {
	@Autowired
	private JobService jobService;

	@GetMapping("/getAllJobs")
	private List<Jobs> getAllJobs() {
		List<Jobs> jobs = (List<Jobs>) jobService.getAllJobs();
		return jobs;
	}

	@GetMapping("/getAllJobs/{jid}")
	public Object getJobsById(@PathVariable Long jid) {

		Object listJobs = jobService.findById(jid);
		return ResponseEntity.ok(listJobs);
	}

	@GetMapping("/designation/{designation}")
	public List<Jobs> findAllByDesignation(@PathVariable(value = "designation") String jdescription) {
//			System.out.println("For which Designation you want to search?");
//			Scanner sc = new Scanner(System.in);  // Create a Scanner object
//			String keyword = sc.nextLine();
		List<Jobs> listJobs = jobService.getAllJobsByDesignation(jdescription);
		if (listJobs.size() == 0) {
			throw new JobsNotFoundException("No jobs Available");
		}
		return listJobs;
	}

	@GetMapping("/location/{location}")
	public List<Jobs> findAllByLocation(@PathVariable(value = "location") String jlocation) {
//		System.out.println("For which Location you want to search?");
//		Scanner sc = new Scanner(System.in);  // Create a Scanner object
//		String keyword = sc.nextLine();
		List<Jobs> listJobs = jobService.getAllJobsByLocation(jlocation);
		if (listJobs.size() == 0) {
			throw new JobsNotFoundException("No jobs Available");
		}
		return listJobs;
	}

	@GetMapping("/company/{company}")
	public List<Jobs> findAllByCompany(@PathVariable(value = "company") String jcompany) {
//		System.out.println("For which Company you want to search?");
//		Scanner sc = new Scanner(System.in);  // Create a Scanner object
//		String keyword = sc.nextLine();

		List<Jobs> listJobs = jobService.getAllJobsByCompany(jcompany);
		if (listJobs.size() == 0) {
			throw new JobsNotFoundException("No jobs Available");
		}
		return listJobs;
	}

	@GetMapping("/experience/{experience}")
	public List<Jobs> findAllByExperience(@PathVariable(value = "experience") String jexperience) {
//		System.out.println("For which Company you want to search?");
//		Scanner sc = new Scanner(System.in);  // Create a Scanner object
//		String keyword = sc.nextLine();

		List<Jobs> listJobs = jobService.getAllJobsByExperience(jexperience);
		if (listJobs.size() == 0) {
			throw new JobsNotFoundException("No jobs Available");
		}
		return listJobs;
	}

}