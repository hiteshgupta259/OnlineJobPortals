package com.onlinejobportal.in.jobseeker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinejobportal.in.jobseeker.model.JobSeekerRegistration;
import com.onlinejobportal.in.jobseeker.repository.JobSeekerRegistrationRepository;

@Service
public class JobSeekerRegistrationServiceImpl implements JobSeekerRegistrationService {

	@Autowired
	private JobSeekerRegistrationRepository jobseekerregistrationrepository;

	public List<JobSeekerRegistration> getAllJobSeekerRegistrationDetails() {
		return (List<JobSeekerRegistration>) jobseekerregistrationrepository.findAll();

	}

	public JobSeekerRegistration createJobSeekerRegistration(JobSeekerRegistration registration) {
		return jobseekerregistrationrepository.save(registration);

	}

	public JobSeekerRegistration getJobSeekerRegistrationById(Long srid) {
		return jobseekerregistrationrepository.findById(srid).get();

	}

	public JobSeekerRegistration findById(int srid) {
		// TODO Auto-generated method stub
		return null;
	}

	public JobSeekerRegistration save(JobSeekerRegistration registration) {

		return jobseekerregistrationrepository.save(registration);
	}

}