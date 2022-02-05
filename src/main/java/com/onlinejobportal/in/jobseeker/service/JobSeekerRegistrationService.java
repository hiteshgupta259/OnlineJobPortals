package com.onlinejobportal.in.jobseeker.service;

import java.util.List;

import com.onlinejobportal.in.jobseeker.model.JobSeekerRegistration;

public interface JobSeekerRegistrationService {

	List<JobSeekerRegistration> getAllJobSeekerRegistrationDetails();

	JobSeekerRegistration createJobSeekerRegistration(JobSeekerRegistration registration);

	JobSeekerRegistration getJobSeekerRegistrationById(Long id);

}